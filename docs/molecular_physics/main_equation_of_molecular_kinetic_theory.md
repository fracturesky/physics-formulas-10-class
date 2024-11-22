# Основное уравнение МКТ

<script setup>
const variables_1 = [
    "pressure",
    "particle_concentration",
    "mass_of_particle",
    "avg_particle_velocity_squared"
];
const variables_2 = [
    "pressure",
    "particle_concentration",
    "avg_particle_kinetic_energy"
];
const variables_3 = [
    "pressure",
    "particle_concentration",
    "boltzmann_constant",
    "kelvin_temperature"
];
</script>

<Formula :variables="variables_1" content="p = \frac{1}{3}nm_0 \langle v^2 \rangle"/>
---
<Formula :variables="variables_2" content="p = \frac{2}{3}n \langle E_к \rangle"/>
---
<Formula :variables="variables_3" content="p = nkT"/>
