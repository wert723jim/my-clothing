<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-600">
        這是 posts/top-[number] 的頁面
      </h1>
      <p class="my-8 text-3xl text-gray-600">
        匹配到的 Top Number: <span class="text-5xl font-semibold text-rose-500">{{ categories }}</span>
      </p>
      <div v-for="product in products" :key="product.id" class="p-10">
        <div>
          商品名稱 : {{ product.title }}
        </div>
        <div>
          商品價格 : {{ product.price }}
        </div>
        <div>
          商品介紹 : {{ product.description }}
        </div>
        <div>
          商品圖片 : <img :src="product.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { categories } = route.params

const { data: products } = useFetch(`http://127.0.0.1:8000/api/products/${categories}`)
console.log(products)
</script>
