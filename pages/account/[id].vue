<template>
  <!-- prevent hydration error -->
  <ClientOnly>
    <div>
      <h1>{{ id }}</h1>
    </div>
  </ClientOnly>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>
