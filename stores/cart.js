import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: {
      cartItems: [],
      show: false
    }
  }),
  actions: {
    toggleCart () {
      this.cart.show = !this.cart.show
    },
    addItemToLocalCart (inventoryId, amount) {
      // localStorage 是否有 cart item ?
      let cartLocal = JSON.parse(localStorage.getItem('cart')) || []
      // 尋找內部是否有傳入的 id
      if (cartLocal.some(item => item.inventory_id === inventoryId)) {
        cartLocal = cartLocal.map((item) => {
          if (item.inventory_id === inventoryId) {
            return {
              ...item,
              product_quantity: item.product_quantity + amount
            }
          }
          return item
        })
      } else {
        cartLocal.push({
          inventory_id: inventoryId,
          product_quantity: amount
        })
      }
      localStorage.setItem('cart', JSON.stringify(cartLocal))
    },
    async getCartItemsInfo () {
      const cartLocal = JSON.parse(localStorage.getItem('cart')) || []
      // 沒有值離開
      if (!cartLocal.length) {
        return
      }
      // 拿來 call api/inventories
      const inventoriesIdList = []
      cartLocal.forEach((item) => {
        inventoriesIdList.push(item.inventory_id)
      })
      const { data } = await useFetch('http://localhost:8000/api/inventories', {
        query: { id: inventoriesIdList.toString() }
      })
      // 加入購物車數量 product_quantity
      cartLocal.forEach((localItem) => {
        data.value = data.value.map((item) => {
          if (item.id === localItem.inventory_id) {
            return {
              ...item,
              product_quantity: localItem.product_quantity
            }
          }
          return item
        })
      })
      this.cart.cartItems = data.value
      // return { data, error }
    },
    removeCartItem (id) {
      let cartLocal = JSON.parse(localStorage.getItem('cart'))
      // localStorage
      cartLocal = cartLocal.filter(item => item.inventory_id !== id)
      this.cart.cartItems = this.cart.cartItems.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(cartLocal))
    },
    async removeOnlineCartItem (id) {
      const token = localStorage.getItem('token')
      const { error } = await useFetch('http://localhost:8000/api/carts', {
        method: 'POST',
        params: id,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(error)
    },
    async addItemToOnlineCart (cartLocal) {
      const token = localStorage.getItem('token')
      const { error } = await useFetch('http://localhost:8000/api/carts', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: cartLocal
      })
      return { error }
    },
    async getOnlineCart () {
      const token = localStorage.getItem('token')
      const { data } = await useFetch('http://localhost:8000/api/carts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      data.value.forEach(item => this.addItemToLocalCart(item.id, item.product_quantity))
      return { data }
    },
    clearCartItems () {
      localStorage.removeItem('cart')
      this.cart.cartItems = {}
    }
  }
})
