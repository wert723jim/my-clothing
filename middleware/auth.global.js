import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware(async (to) => {
  // 如果是在 client 端的話
  // login & register 跳過
  const userStore = useUserStore()
  const noAuthRoute = ['/account/login', '/account/register']
  // client 端才能取得 localStorage
  if (process.client) {
    // 若是由 URL 進入 或是 重新整理，pinia 會沒有資料
    const jwtToken = localStorage.getItem('token') || ''
    // 若有jwtToken
    if (jwtToken) {
      const { data } = await userStore.refreshUser()
      // 若已登入狀態，無法進入 登入頁 和 註冊頁
      if (data.value && noAuthRoute.includes(to.fullPath)) {
        return navigateTo(`/account/${userStore.profile.user.id}`)
      }
      // to.params.id 跟 userStore.profile.user.id 型別不同
      // 若在 URL 的個人資料 id 與 登入資料的 id 不同的話，轉址至登入資料 id
      if (data.value && to.name === 'account-id' && to.params.id !== userStore.profile.user.id.toString()) {
        return navigateTo(`/account/${userStore.profile.user.id}`)
      }

      return
    }
    // 若沒有 jwtToken => 沒有登入，要進入會員資料頁，被轉址到登入頁
    if (to.name === 'account-id' && !to.params.id) {
      return navigateTo('/account/login')
    }
  }
})
