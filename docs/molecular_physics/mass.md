<script setup>
const massVariables = [
  "mass",
  "density",
  "volume"
]

const massFromParticlesVariables = [
  "mass",
  "mass_of_particle",
  "number_of_particles"
]
</script>

# Масса вещества {mass}

<Formula :variables="massVariables" content="m = \rho V"/>

# Масса частиц {mass-from-particles}

<Formula :variables="massFromParticlesVariables" content="m = m_{0} \cdot N"/>
