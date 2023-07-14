<template>
  <div>
    <div class="container mx-auto px-4 md:p-8">
      <main>
        <div>
          <!-- Bread Crumbs -->
          <div class="hidden bread_crumbs lg:block lg:row-start-1 lg:row-end-2 lg:col-span-full">
            <span class="mr-2">
              <a href="/">首頁</a>
            </span>
            <span class="text-2xl mr-2">
              ›
            </span>
            <span class="mr-2">商品名稱</span>
          </div>
          <!-- prod -->
          <div class="prod">
            <div class="prod_img ">
              <img src="https://cdn.store-assets.com/s/274811/i/59927725.jpeg?width=1024&format=webp" alt="" class="max-h-[60vh] mx-auto">
              <div class="prod_img_list">
                <ul class="flex flex-wrap">
                  <li class="w-1/5 p-4">
                    <img src="https://cdn.store-assets.com/s/274811/i/59927725.jpeg?width=1024&format=webp" alt="" class="max-h-12 w-auto">
                  </li>
                  <li class="w-1/5 p-4">
                    <img src="https://cdn.store-assets.com/s/274811/i/59927641.jpeg?width=1024&format=webp" alt="" class="max-h-12 w-auto">
                  </li>
                  <li class="w-1/5 p-4">
                    <img src="https://cdn.store-assets.com/s/274811/i/59927642.jpeg?width=1024&format=webp" alt="" class="max-h-12 w-auto">
                  </li>
                  <li class="w-1/5 p-4">
                    <img src="https://cdn.store-assets.com/s/274811/i/59927647.jpeg?width=1024&format=webp" alt="" class="max-h-12 w-auto">
                  </li>
                  <li class="w-1/5 p-4">
                    <img src="https://cdn.store-assets.com/s/274811/i/59927647.jpeg?width=1024&format=webp" alt="" class="max-h-12 w-auto">
                  </li>
                  <li class="w-1/5 p-4">
                    <img src="https://cdn.store-assets.com/s/274811/i/59927647.jpeg?width=1024&format=webp" alt="" class="max-h-12 w-auto">
                  </li>
                </ul>
              </div>
            </div>
            <div class="prod_info">
              <h1 class="text-3xl font-medium">
                商品名稱
              </h1>
              <div class="prod_price">
                <span class="text-xl">NT$ 890</span>
              </div>
              <div class="flex text-sm">
                <label for="" class="w-[23%] ">顏色</label>
                <div class="style flex">
                  <input id="color1" type="radio" name="color">
                  <label for="color1">黑色</label>
                  <input id="color2" type="radio" name="color">
                  <label for="color2">沙色</label>
                  <input id="color3" type="radio" name="color">
                  <label for="color3">綠色</label>
                </div>
              </div>
              <div class="prod_qty flex">
                <label class="w-[23%]">數量</label>
                <a href="#">-</a>
                <input type="number" value="1" class="text-center">
                <a href="#">+</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
