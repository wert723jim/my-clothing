<template>
  <header class="sticky top-0 bg-[#ebebeb]">
    <div class="flex items-center justify-between px-5 py-2 max-w-screen-2xl mx-auto">
      <div class="lg:w-24 h-full w-36">
        <img src="https://cdn.store-assets.com/s/274811/f/4267870.png?width=350&format=webp" alt="" class="h-full">
      </div>
      <input id="hbg-input" type="checkbox" class="hidden">
      <input id="cart-input" type="checkbox" class="hidden">
      <div class="mask hidden absolute bg-[#CAC6BF] h-screen top-0 bottom-0 left-0 right-0 opacity-50" />
      <!-- 漢堡 -->
      <div class="hbg-list hidden absolute top-0 right-0 bg-white w-[330px] overflow-y-auto h-screen lg:static lg:flex lg:flex-wrap lg:justify-center lg:w-auto lg:h-full lg:bg-transparent">
        <div class="flex justify-end items-center px-5 py-3 lg:hidden">
          <label for="hbg-input">
            <span class="icon-x " />
          </label>
        </div>
        <div class="p-5 border-b">
          <a href="#">
            首頁
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            關於我們
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            聯名合作
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            款式分類
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            品牌分類
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            經銷據點
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            專題報導
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            VIP會員
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            登入
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            註冊
          </a>
        </div>
        <div class="p-5 border-b">
          <a href="">
            搜尋
          </a>
        </div>
      </div>
      <!-- 購物車 -->
      <div class="cart-list hidden absolute top-0 right-0 bg-white w-[330px]  h-screen">
        <div class="h-screen overflow-y-auto relative">
          <div class="px-5 py-2">
            <!-- 標題 -->
            <div class="flex items-center justify-between h-[57px]">
              <span class="text-4xl font-semibold">您的購物車</span>
              <label for="cart-input">
                <span class="icon-x " />
              </label>
            </div>
            <!-- 商品 -->
            <div>
              <div class="cart_prods flex flex-col">
                <div class="cart_prod border-t pt-5 mb-5">
                  <div class="prod_intro flex">
                    <div class="prod_img flex">
                      <!-- 商品頁面 -->
                      <a href="" class="h-[70px] w-[70px]">
                        <img src="https://cdn.store-assets.com/s/274811/i/58509706.jpeg" alt="" class="h-full mx-auto">
                      </a>
                    </div>
                    <!-- 包含刪除鈕，可以從 cart 中移除 -->
                    <div class="prod_info flex flex-col mb-3">
                      <span class="prod_info_title">
                        PIN SKTBS 23SS輕薄防曬衣服冰絲涼感外套 兩色
                      </span>
                      <span class="prod_info_style">
                        灰色, S
                      </span>
                      <span class="prod_info_price">
                        NT$ 1980
                      </span>
                      <button class="text-left">
                        刪除
                      </button>
                    </div>
                  </div>
                  <div class="prod_count flex justify-between">
                    <div class="prod_qty flex">
                      <a href="" class="border border-r-0 w-6 text-center">-</a>
                      <input type="number" value="1" min="0" class="text-center border w-12">
                      <a href="" class="border border-l-0 w-6 text-center">+</a>
                    </div>
                    <div class="prod_total_price">
                      NT$ 1,980
                    </div>
                  </div>
                </div>
                <div class="cart_prod border-t pt-5 mb-5">
                  <div class="prod_intro flex">
                    <div class="prod_img flex">
                      <!-- 商品頁面 -->
                      <a href="" class="h-[70px] w-[70px]">
                        <img src="https://cdn.store-assets.com/s/274811/i/58509706.jpeg" alt="" class="h-full mx-auto">
                      </a>
                    </div>
                    <!-- 包含刪除鈕，可以從 cart 中移除 -->
                    <div class="prod_info flex flex-col mb-3">
                      <span class="prod_info_title">
                        PIN SKTBS 23SS輕薄防曬衣服冰絲涼感外套 兩色
                      </span>
                      <span class="prod_info_style">
                        灰色, S
                      </span>
                      <span class="prod_info_price">
                        NT$ 1980
                      </span>
                      <button class="text-left">
                        刪除
                      </button>
                    </div>
                  </div>
                  <div class="prod_count flex justify-between">
                    <div class="prod_qty flex">
                      <a href="" class="border border-r-0 w-6 text-center">-</a>
                      <input type="number" value="1" min="0" class="text-center border w-12">
                      <a href="" class="border border-l-0 w-6 text-center">+</a>
                    </div>
                    <div class="prod_total_price">
                      NT$ 1,980
                    </div>
                  </div>
                </div>
                <div class="cart_prod border-t pt-5 mb-5">
                  <div class="prod_intro flex">
                    <div class="prod_img flex">
                      <!-- 商品頁面 -->
                      <a href="" class="h-[70px] w-[70px]">
                        <img src="https://cdn.store-assets.com/s/274811/i/58509706.jpeg" alt="" class="h-full mx-auto">
                      </a>
                    </div>
                    <!-- 包含刪除鈕，可以從 cart 中移除 -->
                    <div class="prod_info flex flex-col mb-3">
                      <span class="prod_info_title">
                        PIN SKTBS 23SS輕薄防曬衣服冰絲涼感外套 兩色
                      </span>
                      <span class="prod_info_style">
                        灰色, S
                      </span>
                      <span class="prod_info_price">
                        NT$ 1980
                      </span>
                      <button class="text-left">
                        刪除
                      </button>
                    </div>
                  </div>
                  <div class="prod_count flex justify-between">
                    <div class="prod_qty flex">
                      <a href="" class="border border-r-0 w-6 text-center">-</a>
                      <input type="number" value="1" min="0" class="text-center border w-12">
                      <a href="" class="border border-l-0 w-6 text-center">+</a>
                    </div>
                    <div class="prod_total_price">
                      NT$ 1,980
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 結帳 -->
        <div class="sticky bottom-0 cart_checkout w-full text-white">
          <button class="w-full h-14 bg-black">
            結帳
          </button>
        </div>
      </div>
      <div>
        <div class="flex gap-x-3">
          <div>
            <icon name="material-symbols:search-rounded" size="25" />
          </div>
          <div class="hidden lg:block">
            <icon name="material-symbols:person-2-outline-rounded" size="25" />
          </div>
          <div>
            <label for="cart-input">
              <icon name="ph:handbag-bold" size="25px" />
            </label>
          </div>
          <div class="lg:hidden">
            <label for="hbg-input" class="hbg-label">
              <icon name="ci:hamburger" size="25" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.icon-x {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px #aaa;
}
.icon-x::before {
  content: "\d7";
  color: black;
  font-size: 25px;
}

#hbg-input:checked ~ .hbg-list, #cart-input:checked ~ .cart-list{
  display: flex;
  flex-direction: column;
  box-shadow: -5px 1px 33px #666;
}

#hbg-input:checked ~ .mask, #cart-input:checked ~ .mask{
  display: block;
}
</style>
