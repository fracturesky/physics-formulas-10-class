import { defineConfig } from "vitepress";
// import DefaultTheme from 'vitepress/theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Формулы по Физике за 10 Класс",
  base: "/physics-formulas-10-class/",
  description:
    "Полезный справочник с формулами по физике, необходимыми для 10 класса.",
  lang: "ru-RU",
  outDir: "../public",
  themeConfig: {
    sidebar: [
      {
        text: "Основы МКТ",
        collapsed: false,
        base: "/molecular_physics/",
        items: [
          { text: "Масса", link: "mass" },
          { text: "Концентрация частиц", link: "particle_concentration" },
          { text: "Количество вещества", link: "amount_of_substance" },
          { text: "Количество частиц", link: "amount_of_particles" },
          {
            text: "Средняя кинетическая энергия",
            link: "average_kinetic_energy",
          },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Редактировать страницу",
    },

    footer: {
      message: "Опубликовано под лицензией MIT.",
      copyright: "© Charles R. Tyrrell",
    },

    outline: { label: "Содержание страницы" },

    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },

    lastUpdated: {
      text: "Обновлено",
    },

    darkModeSwitchLabel: "Оформление",
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Вернуться к началу",
    langMenuLabel: "Изменить язык",
  },
  markdown: {
    math: true,
  },
});

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  ru: {
    placeholder: "Поиск в документации",
    translations: {
      button: {
        buttonText: "Поиск",
        buttonAriaLabel: "Поиск",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Сбросить поиск",
          resetButtonAriaLabel: "Сбросить поиск",
          cancelButtonText: "Отменить поиск",
          cancelButtonAriaLabel: "Отменить поиск",
        },
        startScreen: {
          recentSearchesTitle: "История поиска",
          noRecentSearchesText: "Нет истории поиска",
          saveRecentSearchButtonTitle: "Сохранить в истории поиска",
          removeRecentSearchButtonTitle: "Удалить из истории поиска",
          favoriteSearchesTitle: "Избранное",
          removeFavoriteSearchButtonTitle: "Удалить из избранного",
        },
        errorScreen: {
          titleText: "Невозможно получить результаты",
          helpText: "Вам может потребоваться проверить подключение к Интернету",
        },
        footer: {
          selectText: "выбрать",
          navigateText: "перейти",
          closeText: "закрыть",
          searchByText: "поставщик поиска",
        },
        noResultsScreen: {
          noResultsText: "Нет результатов для",
          suggestedQueryText: "Вы можете попытаться узнать",
          reportMissingResultsText:
            "Считаете, что поиск даёт ложные результаты？",
          reportMissingResultsLinkText: "Нажмите на кнопку «Обратная связь»",
        },
      },
    },
  },
};
