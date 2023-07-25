<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in pradacts" :key="p.id">
        <NuxtLink :to="`/test/${p.id}`">
          {{ p.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: pradacts } = await useFetch('https://fakestoreapi.com/products')
</script>
