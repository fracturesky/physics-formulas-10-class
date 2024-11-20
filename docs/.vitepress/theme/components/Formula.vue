<!-- // variables.js -->
<!-- export const commonVariables = { -->
<!--   rho: { -->
<!--     variable: "\\rho", -->
<!--     quantity: "Плотность", -->
<!--     units: "\\text{кг}/\\text{м}^3", -->
<!--     link: "density" -->
<!--   }, -->
<!--   m: { -->
<!--     variable: "m", -->
<!--     quantity: "Масса", -->
<!--     units: "\\text{кг}", -->
<!--     link: "mass" -->
<!--   }, -->
<!--   // Добавьте другие часто используемые переменные -->
<!-- }; -->
<!---->
<!-- // FormulaComponent.vue -->
<template>
  <div class="formula" v-html="renderKatexFormula(content)"></div>
  <table class="formula-variables-table">
    <thead>
      <tr>
        <th class="center">Переменная</th>
        <th class="center">Физ. величина</th>
        <th class="center">Ед. измерения в СИ</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in processedVariables" :key="index">
        <td class="center" v-html="renderKatexVariable(item.variable)"></td>
        <td
          v-if="item.link"
          v-html="md.render(`[${item.quantity}](${item.link})`)"
        ></td>
        <td v-else>{{ item.quantity }}</td>
        <td class="center" v-html="renderKatexUnits(item.units)"></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import katex from "katex";
import "katex/dist/katex.min.css";
import { computed } from "vue";
import { commonVariables } from "./variables";
import markdownit from "markdown-it";
import { useData, withBase } from "vitepress";

const { page } = useData();

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  variables: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((item) => {
        // Проверяем, является ли элемент строкой (ключом из commonVariables)
        // или полноценным объектом с необходимыми свойствами
        return (
          typeof item === "string" ||
          ("variable" in item && "quantity" in item && "units" in item)
        );
      });
    },
  },
});

const processedVariables = computed(() => {
  return props.variables.map((item) => {
    // Если item это строка, получаем переменную из commonVariables
    if (typeof item === 'string') {
      return commonVariables[item];
    }
    
    return item;
  });
});

function isCurrentPage(link) {
  // Получаем текущий путь из VitePress
  const currentPath = page.value.relativePath.replace(/\.md$/, '');
  // Сравниваем с переданной ссылкой
  return currentPath === link;
}

function renderKatexVariable(text) {
  return katex.renderToString(`\\Large ${text}`, {
    throwOnError: false,
    displayMode: false,
  });
}

function renderKatexUnits(text) {
  if (text == null) {
    text =
      "\\begin{gathered} \\text{Безразмерная} \\\\ \\text{величина} \\end{gathered}";
  } else {
    text = `\\large \\mathrm{${text}}`;
  }
  return katex.renderToString(text, {
    throwOnError: false,
    displayMode: false,
  });
}

function renderKatexFormula(text) {
  return katex.renderToString(`\\Large ${text}`, {
    throwOnError: false,
    displayMode: true,
  });
}
</script>

<style>
.formula-variables-table .center {
  text-align: center;
}
</style>
