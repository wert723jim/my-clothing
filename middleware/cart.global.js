import { useCartStore } from '@/stores/cart'

export default defineNuxtRouteMiddleware(async () => {
  const cartStore = useCartStore()
  if (process.client) {
    // 取得 localhost 存取的購物車資訊
    await cartStore.getCartItemsInfo()
  }
})
