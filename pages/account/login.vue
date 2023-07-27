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
              <form id="loginForm" action="" @submit.prevent.stop="emailLogin">
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
                    type="text"
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
  const { data: userData } = await useFetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    body: toRaw({
      email,
      password
    })
  })

  console.log('登入資料:', userData)
}
</script>
