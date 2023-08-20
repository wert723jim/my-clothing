<template>
  <div>
    <NuxtLink to="/test">
      test
    </NuxtLink>
    <button @click="handleClick">click</button>
    <button class="block" @click="fetchClientCart">fetchClientCart</button>
    <button class="block" @click="addNewOnlineCart">addNewOnlineCart</button>
  </div>
</template>

<script setup>
const handleClick = async () => {
  await useFetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })
  const token = useCookie('XSRF-TOKEN')
  const { data } = await useFetch('http://localhost:8000/login', {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'X-XSRF-TOKEN': token },
    body: { email: 'nharvey@example.org', password: 'password' }
  })
  console.log(data.value)
}

const fetchClientCart = async () => {
  const token = localStorage.getItem('token')
  console.log('token:', token, 'type:', typeof token)
  const { data } = await useFetch('http://localhost:8000/api/carts', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log(data)
}

const addNewOnlineCart = async () => {
  const cartLocal = JSON.parse(localStorage.getItem('cart')) || []
  const token = localStorage.getItem('token')
  const { error } = await useFetch('http://localhost:8000/api/carts', {
    method: 'POST',
    credentials: 'include',

    headers: {
      Authorization: `Bearer ${token}`
    },
    body: cartLocal
  })
  console.log('error:', error)
}
</script>
