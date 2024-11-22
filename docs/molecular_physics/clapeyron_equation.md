# Уравнение Клапейрона {clapeyron-equation}

<script setup>
const variables_1 = [
    "pressure",
    "volume",
    "mass",
    "molar_mass",
    "kelvin_temperature",
    "universal_gas_constant"
];
const variables_2 = [
  {
    variable: "p_1",
    quantity: "Начальное состояние давления идеального газа",
    units: "Па"
  },
  {
    variable: "V_1",
    quantity: "Начальное состояние объема газа",
    units: "м^3"
  },
  {
    variable: "T_1",
    quantity: "Начальное состояние температуры газа",
    units: "К"
  },
  {
    variable: "p_2",
    quantity: "Конечное состояние давления идеального газа",
    units: "Па"
  },
  {
    variable: "V_2",
    quantity: "Конечное состояние объема газа",
    units: "м^3"
  },
  {
    variable: "T_2",
    quantity: "Конечное состояние температуры газа",
    units: "К"
  },    
];
</script>

<Formula :variables="variables_1" content="pV = \frac{m}{M}RT"/>
---
<Formula :variables="variables_2" content="\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}"/>
