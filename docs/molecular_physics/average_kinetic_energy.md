# Средняя кинетическая энергия частицы {average-kinetic-energy-of-particle}

<script setup>
const averageKineticEnergyOfParticleVariables_1 = [
    "average_kinetic_energy",
    "mass_of_particle",
    "avg_square_velocity"
];

const averageKineticEnergyOfParticleVariables_2 = [
    "average_kinetic_energy",
    "boltzmann_constant",
    "kelvin_temperature"
];
</script>

<Formula :variables="averageKineticEnergyOfParticleVariables_1" content="\langle E_к \rangle = \frac{m_0 \cdot \langle v^2 \rangle}{2}"/>
---
<Formula :variables="averageKineticEnergyOfParticleVariables_2" content="\langle E_k \rangle = \frac{3}{2}\cdot k \cdot T"/>
