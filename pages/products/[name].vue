<template>
  <div>
    <div class="max-w-[1400px] mx-auto px-4 md:p-8">
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
            <span class="mr-2">
              {{ name }}
            </span>
          </div>
          <!-- prod -->
          <div class="prod lg:flex">
            <div class="prod_img lg:grow">
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
              <form id="addToCartForm" action="" @submit.prevent.stop="handleSubmit">
                <h1 class="text-3xl font-medium">
                  {{ name }}
                </h1>
                <!-- 商品名稱 -->
                <input type="text" :value="name" name="prodName" class="hidden">
                <div class="prod_price">
                  <!-- 商品價格 -->
                  <input type="number" value="890" name="prodPrice" class="hidden">
                  <span class="text-xl font-bold">NT$ 890</span>
                </div>
                <div class="flex text-sm">
                  <!-- 商品顏色 -->
                  <label for="" class="w-[23%] ">顏色</label>
                  <div class="style flex">
                    <input id="color1" type="radio" name="prodColor" value="color1" checked>
                    <label for="color1">黑色</label>
                    <input id="color2" type="radio" name="prodColor" value="color2">
                    <label for="color2">沙色</label>
                    <input id="color3" type="radio" name="prodColor" value="color3">
                    <label for="color3">綠色</label>
                  </div>
                </div>
                <div class="prod_qty flex">
                  <!-- 商品數量 -->
                  <label class="w-[23%]">數量</label>
                  <a href="#" @click.stop.prevent="reduceQty">-</a>
                  <input v-model="prodQty" type="number" class="text-center" name="prodQty">
                  <a href="#" @click.stop.prevent="addQty">+</a>
                </div>
                <div class="btns">
                  <div>
                    <a href="">
                      立即購買
                    </a>
                  </div>
                  <div>
                    <button type="submit">
                      加入購物車
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { name } = route.params
const prodQty = ref(1)

const addQty = () => {
  prodQty.value++
}

const reduceQty = () => {
  prodQty.value--
}

const handleSubmit = (e) => {
  const form = e.target
  const formData = new FormData(form)
  for (const [name, value] of formData.entries()) {
    console.log(name + ': ' + value)
  }
}
</script>
