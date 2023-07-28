<template>
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
              <form id="loginForm" action="" @submit.prevent="emailLogin">
                <div class="mb-5">
                  <input
                    v-model="email"
                    type="text"
                    name="email"
                    placeholder="電郵"
                    class="border border-inherit w-full py-2 px-5"
                  >
                </div>
                <div class="mb-5">
                  <input
                    v-model="password"
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
</template>

<script setup>
const email = ref('')
const password = ref('')

const emailLogin = async () => {
  // 取得 laravel csrf token 驗證
  // const { data: csrfToken } = await useFetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
  //   server: false,
  //   mode: 'cors',
  //   credentials: 'include'
  // })
  // console.log(csrfToken)
  const { data: userData, error } = await useFetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })
  // 登入成功
  if (userData.value) {
    navigateTo('/account')
  } else {
    console.log(error.value?.data?.message ?? '未知錯誤')
  }
}
</script>
