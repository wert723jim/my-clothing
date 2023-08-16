<template>
  <!-- prevent hydration error -->
  <ClientOnly>
    <div class="px-5 max-w-xl mx-auto">
      <div class="w-full text-center border my-10 p-5">
        <div>
          <h1 class="text-xl font-semibold">
            註冊
          </h1>
        </div>
        <div class="px-5">
          <!-- 會員註冊 form -->
          <div>
            <div>
              <button class="bg-green-400 w-full text-white py-2 font-semibold">
                第三方註冊
              </button>
            </div>
            <div>
              <div>註冊電郵</div>
              <div class="register-form">
                <form id="registerForm" action="" @submit.prevent.stop="handleRegisterSubmit">
                  <div class="mb-5">
                    <input v-model="register.name" type="text" name="name" placeholder="用戶名" class="border border-inherit w-full py-2 px-5">
                  </div>
                  <div class="mb-5">
                    <input v-model="register.email" type="text" name="email" placeholder="電郵" class="border border-inherit w-full py-2 px-5">
                  </div>
                  <div class="mb-5">
                    <input v-model="register.password" type="password" name="password" placeholder="密碼" class="border border-inherit w-full py-2 px-5">
                  </div>
                  <div class="mb-5">
                    <input v-model="register.password_confirmation" type="password" name="password_confirmation" placeholder="密碼確認" class="border border-inherit w-full py-2 px-5">
                  </div>
                  <div class="mb-5">
                    <input v-model="register.phone" type="text" name="phone" placeholder="電話" class="border border-inherit w-full py-2 px-5">
                  </div>
                  <div class="mb-5">
                    <input v-model="register.address" type="text" name="address" placeholder="地址" class="border border-inherit w-full py-2 px-5">
                  </div>
                  <div>
                    <div>
                      <button type="submit" class="bg-[#0f0303] text-white w-full py-2 mb-5">
                        註冊
                      </button>
                    </div>
                    <div>
                      <NuxtLink to="/account/login">
                        登入
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
const register = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  phone: '',
  address: ''
})

const handleRegisterSubmit = async () => {
  await useFetch('http://localhost:8000/sanctum/csrf-cookie', { credentials: 'include' })
  const token = useCookie('XSRF-TOKEN')
  const { error } = await useFetch('http://localhost:8000/register', {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'X-XSRF-TOKEN': token },
    // 如果直接用 toRaw(register) ，每當 reactive、ref、computed 改變就會直接 fetch
    body: {
      name: register.name,
      email: register.email,
      password: register.password,
      password_confirmation: register.password_confirmation,
      phone: register.phone,
      address: register.address
    },
    initialCache: false
  })

  if (error.value) {
    console.log(error.value?.data?.message ?? '未知錯誤')
  } else {
    navigateTo('/account/login')
  }
}
</script>
