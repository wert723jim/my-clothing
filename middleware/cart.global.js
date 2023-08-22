import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware(async () => {
  const cartStore = useCartStore()
  const userStore = useUserStore()
  if (process.client) {
    // 取得 localhost 存取的購物車資訊
    // 若有登入
    if (userStore.profile.user.id) {
      const cartLocal = JSON.parse(localStorage.getItem('cart'))
      const { error } = await cartStore.addItemToOnlineCart(cartLocal)
      if (error.value) {
        console.error('加入線上購物車錯誤')
        return
      }
      // userStore.profile.user.carts.forEach(item => cartStore.addItemToLocalCart(item.id, item.product_quantity))
      // await cartStore.getOnlineCart()
      // return
    }
    // if (userStore.profile.user.id) {
    //   if (!userStore.profile.isAuthenticated) {
    //     userStore.profile.user.carts.forEach(item => cartStore.addItemToLocalCart(item.id, item.product_quantity))
    //   }
    //   const cartLocal = JSON.parse(localStorage.getItem('cart'))
    //   const { error } = await cartStore.addItemToOnlineCart(cartLocal)
    //   if (error.value) {
    //     console.error('加入線上購物車錯誤')
    //     return
    //   }
    //   // await cartStore.getCartItemsInfo()
    //   // localStorage.removeItem('cart')
    //   // return
    // }
    // 沒有登入
    await cartStore.getCartItemsInfo()
  }
})
