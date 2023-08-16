<template>
  <!-- prevent hydration error -->
  <ClientOnly>
    <div class="px-5 max-w-xl mx-auto">
      <div class="w-full text-center border my-10 p-5">
        <div>
          <h1 class="text-xl font-semibold">
            登入
          </h1>
        </div>
        <div>
          <!-- 會員登入 form -->
          <div class="py-5">
            <div>
              <button class="bg-green-400 w-full text-white py-2 font-semibold">
                第三方登入
              </button>
            </div>
            <div>
              <div class="my-5">
                登入電郵
              </div>
              <div class="login-form">
                <form id="loginForm" action="" @submit.stop.prevent="handleEmailLogin">
                  <div class="mb-5">
                    <input
                      v-model="loginData.email"
                      type="text"
                      name="email"
                      placeholder="電郵"
                      class="border border-inherit w-full py-2 px-5"
                    >
                  </div>
                  <div class="mb-5">
                    <input
                      v-model="loginData.password"
                      type="password"
                      name="password"
                      placeholder="密碼"
                      class="border border-inherit w-full py-2 px-5"
                    >
                  </div>
                  <div>
                    <div class="mb-5">
                      <button type="submit" class="w-full bg-black text-white py-2">
                        登入
                      </button>
                    </div>
                    <div>
                      <a href="">忘記密碼 ?</a>
                    </div>
                    <div>
                      <NuxtLink to="/account/register">
                        註冊
                      </NuxtLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
// import { useUserStore } from '@/stores/user'

// const userStore = useUserStore()
const loginData = reactive({
  email: '',
  password: ''
})
const handleEmailLogin = async () => {
  await useFetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })
  const token = useCookie('XSRF-TOKEN')
  const { data } = await useFetch('http://localhost:8000/login', {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'X-XSRF-TOKEN': token },
    body: { email: loginData.email, password: loginData.password }
  })

  console.log(data)
}
// const handleEmailLogin = async () => {
//   const { data, error } = await userStore.emailLogin(toRaw(loginData))
//   // 登入成功
//   if (data.value) {
//     navigateTo('/')
//   } else {
//     console.log(error.value?.data?.message ?? '未知錯誤')
//   }
// }
</script>
