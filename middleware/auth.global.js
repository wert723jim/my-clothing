import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware(async (to) => {
  // 如果是在 client 端的話
  // login & register 跳過
  const userStore = useUserStore()
  const noAuthRoute = ['/account/login', '/account/register']
  // client 端才能取得 localStorage
  if (process.client) {
    const jwtToken = localStorage.getItem('token') || ''
    if (jwtToken) {
      const { data } = await userStore.refreshUser()
      if (data.value && noAuthRoute.includes(to.fullPath)) {
        return navigateTo(`/account/${userStore.profile.id}`)
      }
    }
  }
})
