<template>
  <div class="px-5 max-w-xl mx-auto">
    <div class="w-full text-center border my-10 p-5">
      <div>
        <h1 class="text-xl font-semibold">
          登入
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
                <div class="mb-5">
                  <input type="text" name="password_confirmation" placeholder="密碼確認" class="border border-inherit w-full py-2 px-5">
                </div>
                <div class="mb-5">
                  <input type="text" name="phone" placeholder="電話" class="border border-inherit w-full py-2 px-5">
                </div>
                <div class="mb-5">
                  <input type="text" name="address" placeholder="地址" class="border border-inherit w-full py-2 px-5">
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
