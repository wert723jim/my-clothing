import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      user: {
        id: null,
        name: null,
        email: null,
        phone: null,
        address: null
      },
      token: null
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
      } else {
        localStorage.removeItem('token')
      }

      return {
        data,
        error
      }
    },
    async emailLogin (loginData) {
      const { data, error } = await useFetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
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
      const jwtToken = localStorage.getItem('token')
      await useFetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      })
      // 清空 pinia、localStorage 資料(client 端)
      this.profile.user = {}
      localStorage.removeItem('token')
    }
  }
})
