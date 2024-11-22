# Количество вещества {amount-of-substance}

<script setup>
const amountOfSubstanceVariables_1 = [
    "amount_of_substance",
    "number_of_particles",
    "avogadro_constant"
];

const amountOfSubstanceVariables_2 = [
    "amount_of_substance",
    "number_of_particles",
    "mass_of_particle",
    "avogadro_constant",
    "mass",
    "molar_mass"
];

</script>

<Formula :variables="amountOfSubstanceVariables_1" content="v = \frac{N}{N_{\!A}}"/>
---
<Formula :variables="amountOfSubstanceVariables_2" content="v = \frac{N \cdot m_0}{N_{\!A} \cdot m_0} = \frac{m}{M}"/>
