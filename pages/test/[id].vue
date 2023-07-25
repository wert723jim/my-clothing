<template>
  <div>
    <h1>{{ id }}</h1>
    <NuxtLink to="/test">
      test
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>
