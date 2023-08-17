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
    async refreshCart (inventories) {
      const { data, error } = await useFetch('http://localhost:8000/api/inventories', {
        query: { id: inventories.toString() }
      })
      this.cart.cartItems = data.value
      return { data, error }
    }
  }
})
