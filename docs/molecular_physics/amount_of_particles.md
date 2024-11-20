# Количество частиц {amount-of-particles}

<script setup>
const amountOfParticles = [
    "number_of_particles",
    "mass",
    "molar_mass",
    "avogadro_constant",
    "amount_of_substance"
];
</script>

<Formula :variables="amountOfParticles" content="N = \frac{m}{M_r} \cdot N_A \Rightarrow v \cdot N_A"/>
