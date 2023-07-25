<template>
  <div>
    <!-- carousel -->
    <div class="home_carousel w-screen h-[90vh]">
      <img src="https://cdn.store-assets.com/s/274811/f/11148959.jpg?width=1500&format=webp" alt="" class="w-full h-full">
    </div>
    <main class="my-14 mx-6">
      <!-- 精選品牌 -->
      <div class="highlight_brand container mx-auto">
        <h2 class="text-center text-4xl">
          精選品牌
        </h2>
        <div class="brands flex flex-wrap">
          <div class="brand basis-auto m-2 lg:min-w-[250px] lg:basis-0 lg:grow">
            <a href="#" class="relative max-h-56 h-56 flex lg:max-h-72 lg:h-72">
              <div>
                <img src="" alt="">
              </div>
            </a>
          </div>
          <div class="brand basis-auto m-2 lg:min-w-[250px] lg:basis-0 lg:grow">
            <a href="#" class="relative max-h-56 h-56 flex lg:max-h-72 lg:h-72">
              <div>
                <img src="" alt="">
              </div>
            </a>
          </div>
          <div class="brand basis-auto m-2 lg:min-w-[250px] lg:basis-0 lg:grow">
            <a href="#" class="relative max-h-56 h-56 flex lg:max-h-72 lg:h-72">
              <div>
                <img src="" alt="">
              </div>
            </a>
          </div>
          <div class="brand basis-auto m-2 lg:min-w-[250px] lg:basis-0 lg:grow">
            <a href="#" class="relative max-h-56 h-56 flex lg:max-h-72 lg:h-72">
              <div>
                <img src="" alt="">
              </div>
            </a>
          </div>
          <div class="brand basis-auto m-2 lg:min-w-[250px] lg:basis-0 lg:grow">
            <a href="#" class="relative max-h-56 h-56 flex lg:max-h-72 lg:h-72">
              <div>
                <img src="" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Featured product -->
      <div class="feature_prod mt-16 container mx-auto">
        <h2 class="text-center text-4xl mb-4">
          精選商品
        </h2>
        <div class="f_prods grid grid-cols-2 gap-[30px] lg:grid-cols-5">
          <div class="f_prod lg:w-full">
            <a href="#">
              <div class="f_prod_top">
                <img src="https://cdn.store-assets.com/s/274811/i/59764433.jpeg?width=480&format=webp" alt="" class="w-full h-full object-cover">
              </div>
              <div class="f_prod_bottom p-3 text-center">
                <p>WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色</p>
                <p>NT$ 3,380 </p>
              </div>
            </a>
          </div>
          <div class="f_prod">
            <a href="#">
              <div class="f_prod_top">
                <img src="https://cdn.store-assets.com/s/274811/i/59764433.jpeg?width=480&format=webp" alt="" class="w-full h-full object-cover">
              </div>
              <div class="f_prod_bottom p-3 text-center">
                <p>WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色</p>
                <p>NT$ 3,380 </p>
              </div>
            </a>
          </div>
          <div class="f_prod">
            <a href="#">
              <div class="f_prod_top">
                <img src="https://cdn.store-assets.com/s/274811/i/59764433.jpeg?width=480&format=webp" alt="" class="w-full h-full object-cover">
              </div>
              <div class="f_prod_bottom p-3 text-center">
                <p>WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色</p>
                <p>NT$ 3,380 </p>
              </div>
            </a>
          </div>
          <div class="f_prod">
            <a href="#">
              <div class="f_prod_top">
                <img src="https://cdn.store-assets.com/s/274811/i/59764433.jpeg?width=480&format=webp" alt="" class="w-full h-full object-cover">
              </div>
              <div class="f_prod_bottom p-3 text-center">
                <p>WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色</p>
                <p>NT$ 3,380 </p>
              </div>
            </a>
          </div>
          <div class="f_prod">
            <a href="#">
              <div class="f_prod_top">
                <img src="https://cdn.store-assets.com/s/274811/i/59764433.jpeg?width=480&format=webp" alt="" class="w-full h-full object-cover">
              </div>
              <div class="f_prod_bottom p-3 text-center">
                <p>WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色</p>
                <p>NT$ 3,380 </p>
              </div>
            </a>
          </div>
          <div class="f_prod">
            <a href="#">
              <div class="f_prod_top">
                <img src="https://cdn.store-assets.com/s/274811/i/59764433.jpeg?width=480&format=webp" alt="" class="w-full h-full object-cover">
              </div>
              <div class="f_prod_bottom p-3 text-center">
                <p>WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色</p>
                <p>NT$ 3,380 </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
    <!-- 登入 -->
    <div class="join h-[500px]">
      <div class="flex justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat" style="background-image:url('https://cdn.store-assets.com/s/274811/f/4816708.jpeg?width=1500&format=webp');">
        <div class="text-center text-white">
          <p class="mb-3">
            立即加入我們
          </p>
          <p class="mb-3">
            享受優質的購物體驗
          </p>
          <button class="bg-black px-8 py-2.5">
            登入
          </button>
        </div>
      </div>
    </div>
    <!-- footer -->
  </div>
</template>

<style scoped>
.brand a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(140, 140, 140, .03);
}
.brand {
  width: calc(50% - 16px)
}
.f_prod {
  margin: 5px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.1);
  /* width: calc(50% - 10px) */
}
</style>
