<template>
  <div class="px-5 max-w-xl mx-auto">
    <div class="w-full text-center border my-10">
      <div class="top-options flex mb-5">
        <div
          :class="{ 'active-link': formChoose === 'register'}"
          class="grow py-5 border-r border-b"
          @click="chooseForm('register')"
        >
          會員註冊
        </div>
        <div
          :class="{ 'active-link': formChoose === 'login'}"
          class="grow py-5 border-l border-b"
          @click="chooseForm('login')"
        >
          會員登入
        </div>
      </div>
      <div class="px-5">
        <!-- 會員登入 form -->
        <div :class="{hidden: formChoose !== 'login'}">
          <div>
            <button class="bg-green-400 w-full text-white py-2 font-semibold">
              第三方登入
            </button>
          </div>
          <div>
            <div>登入電郵</div>
            <div class="login-form">
              <form id="loginForm" action="">
                <div class="mb-5">
                  <input type="text" name="email" placeholder="電郵" class="border border-inherit w-full py-2 px-5">
                </div>
                <div class="mb-5">
                  <input type="text" name="password" placeholder="密碼" class="border border-inherit w-full py-2 px-5">
                </div>
                <div>
                  <div>
                    <button type="submit">
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
        <!-- 會員註冊 form -->
        <div :class="{hidden: formChoose !== 'register'}">
          <div>
            <button class="bg-green-400 w-full text-white py-2 font-semibold">
              第三方註冊
            </button>
          </div>
          <div>
            <div>註冊電郵</div>
            <div class="register-form">
              <form id="registerForm" action="">
                <div class="mb-5">
                  <input type="text" name="name" placeholder="用戶名" class="border border-inherit w-full py-2 px-5">
                </div>
                <div class="mb-5">
                  <input type="text" name="email" placeholder="電郵" class="border border-inherit w-full py-2 px-5">
                </div>
                <div class="mb-5">
                  <input type="text" name="password" placeholder="密碼" class="border border-inherit w-full py-2 px-5">
                </div>
                <div>
                  <div>
                    <button type="submit" class="bg-[#0f0303] text-white w-full py-2 mb-5">
                      註冊
                    </button>
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
const formChoose = ref('login')
const chooseForm = (formName) => {
  formChoose.value = formName
}
</script>

<style scoped>
.active-link {
  border: none;
}
</style>
