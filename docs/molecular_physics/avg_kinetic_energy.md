# Средняя кинетическая энергия частицы {avg-particle-kinetic-energy}

<script setup>
const variables_1 = [
    "avg_particle_kinetic_energy",
    "mass_of_particle",
    "avg_particle_velocity_squared"
];

const variables_2 = [
    "avg_particle_kinetic_energy",
    "boltzmann_constant",
    "kelvin_temperature"
];
</script>

<Formula :variables="variables_1" content="\langle E_к \rangle = \frac{m_0 \cdot \langle v^2 \rangle}{2}"/>
---
<Formula :variables="variables_2" content="\langle E_к \rangle = \frac{3}{2}kT"/>
