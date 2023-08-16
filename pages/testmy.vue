<template>
  <div>
    <NuxtLink to="/test">
      test
    </NuxtLink>
    <button @click="handleClick">click</button>
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
</script>
