<template>
  <!-- prevent hydration error -->
  <ClientOnly>
    <div>
      <h1>{{ id }}</h1>
    </div>
    <div>
      <button @click.stop.prevent="handleLogout">Logout</button>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const route = useRoute()
const { id } = route.params
// 登出
const handleLogout = async () => {
  await userStore.logoutUser()
  navigateTo('/')
}
</script>
