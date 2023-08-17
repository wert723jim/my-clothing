<template>
  <div>
    <div class="max-w-[1400px] mx-auto px-4 md:p-8">
      <main>
        <div v-if="product">
          <!-- Bread Crumbs -->
          <div class="hidden bread_crumbs lg:block lg:row-start-1 lg:row-end-2 lg:col-span-full">
            <span class="mr-2">
              <a href="/">首頁</a>
            </span>
            <span class="text-2xl mr-2">
              ›
            </span>
            <span class="mr-2">
              {{ product.name }}
            </span>
          </div>
          <!-- prod -->
          <div class="prod lg:flex">
            <div class="prod_img lg:grow">
              <img :src="product.images[0].url" alt="" class="max-h-[60vh] mx-auto">
              <div class="prod_img_list">
                <ul class="flex flex-wrap">
                  <li v-for="img in product.images" :key="img.id" class="w-1/5 p-4">
                    <img :src="img.url" alt="" class="max-h-12 w-auto">
                  </li>
                </ul>
              </div>
            </div>
            <div class="prod_info">
              <form id="addToCartForm" action="" @submit.prevent.stop="handleSubmit">
                <h1 class="text-3xl font-medium">
                  {{ product.name }}
                </h1>
                <!-- 商品id -->
                <input type="text" :value="product.id" name="prodId" class="hidden">
                <div class="prod_price">
                  <!-- 商品價格 -->
                  <input type="number" :value="product.price" name="prodPrice" class="hidden">
                  <span class="text-xl font-bold">NT$ {{ product.price }}</span>
                </div>
                <div class="flex text-sm">
                  <!-- 商品顏色 -->
                  <!-- <label for="" class="w-[23%] ">顏色</label>
                  <div class="style flex">
                    <div v-for="color in prodColor" :key="color">
                      <input
                        v-model="colorPicked"
                        type="radio"
                        name="prodColor"
                        :value="color"
                        @change="colorRemainedSize"
                      >
                      <label :for="color">{{ color }}</label>
                    </div>
                  </div> -->
                </div>
                <!-- 商品尺寸 -->
                <!-- <div v-if="prodSize.length > 0" class="flex">
                  <label for="" class="w-[23%]">尺寸</label>
                  <div v-for="size in prodSize" :key="size">
                    <input
                      :id="size"
                      v-model="sizePicked"
                      type="radio"
                      name="prodSize"
                      :value="size"
                    >
                    <label :for="size">{{ size }}</label>
                  </div>
                </div> -->
                <div>
                  <div v-for="inventory in product.inventories" :key="inventory.id">
                    <input v-model="chosen" type="radio" name="inventory" :value="inventory.id">
                    {{ inventory.id }}
                    {{ inventory.color }}
                    {{ inventory.size }}
                    <span>數量</span>
                    {{ inventory.quantity }}
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
                    <button type="submit" @click="handleClick">
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
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
const route = useRoute()
const { id } = route.params
const prodQty = ref(1)
const chosen = ref(null)
// const prodColor = reactive([])
// const prodSize = reactive([])
// const colorPicked = ref('')
// const sizePicked = ref('')

const { data: product } = await useFetch(`http://127.0.0.1:8000/api/products/${id}`)

// const prodInventories = product.value?.inventories
// 篩選出 inventories 中有什麼顏色
// prodInventories.forEach((prod) => {
//   if (!prodColor.includes(prod.color)) {
//     prodColor.push(prod.color)
//   }
// })
// // 當選好顏色後，找出該顏色有什麼size
// const colorRemainedSize = () => {
//   // 清除上一個顏色所篩選出剩餘的 size
//   prodSize.splice(0, prodSize.length)
//   // 清除上一個選擇顏色所選的 size
//   sizePicked.value = ''
//   prodInventories.forEach((prod) => {
//     if (prod.color === colorPicked.value) {
//       prodSize.push(prod.size)
//     }
//   })
// }

// 不能小於 1
// 要計算是否有超過 inventories 的 amount
// 增加商品數量
const addQty = () => {
  prodQty.value++
}
// 減少商品數量
const reduceQty = () => {
  if (prodQty.value === 1) { return }
  prodQty.value--
}

const handleSubmit = async () => {
  // const form = e.target
  // const formData = new FormData(form)
  // for (const [name, value] of formData.entries()) {
  //   console.log(name + ': ' + value)
  // }
  // 是否有勾選顏色、尺寸
  if (!chosen.value) {
    console.log('請勾選顏色尺寸')
    return
  }
  const cartLocal = JSON.parse(localStorage.getItem('cart')) || []
  // localStorage 是否有 cart item ?
  cartLocal.push(chosen.value)
  localStorage.setItem('cart', JSON.stringify(cartLocal))
  const { error } = await cartStore.refreshCart(cartLocal)
  if (error.value) {
    console.log('錯誤')
  }
}

const handleClick = () => {
  cartStore.toggleCart()
}
</script>
