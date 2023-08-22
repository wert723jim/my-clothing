import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      user: {
        id: null,
        name: null,
        email: null,
        phone: null,
        address: null,
        carts: []
      },
      token: null,
      isAuthenticated: false
    }
  }),
  actions: {
    async refreshUser () {
      const jwtToken = localStorage.getItem('token')
      const { data, error } = await useFetch('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })

      if (data.value) {
        this.profile.user = {
          ...data.value
        }
        this.profile.token = localStorage.getItem('token')
      } else {
        localStorage.removeItem('token')
      }

      return {
        data,
        error
      }
    },
    async emailLogin (loginData) {
      await useFetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })
      const token = useCookie('XSRF-TOKEN')
      const { data, error } = await useFetch('http://localhost:8000/login', {
        method: 'POST',
        credentials: 'include',
        headers: { Accept: 'application/json', 'X-XSRF-TOKEN': token },
        body: loginData
      })

      if (data.value) {
        this.profile = {
          ...data.value
        }
        localStorage.setItem('token', this.profile.token)
      }

      return {
        data,
        error
      }
    },
    async logoutUser () {
      await useFetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })
      const token = useCookie('XSRF-TOKEN')
      const jwtToken = localStorage.getItem('token')
      await useFetch('http://localhost:8000/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'X-XSRF-TOKEN': token
        }
      })
      // 清空 pinia、localStorage 資料(client 端)
      this.profile.user = {}
      this.profile.isAuthenticated = false
      this.profile.token = null
      localStorage.removeItem('token')
    }
  }
})
