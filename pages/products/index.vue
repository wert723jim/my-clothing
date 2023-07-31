<template>
  <div>
    <div class="max-w-[1400px] mx-auto px-4 py-8 md:p-8">
      <main>
        <!-- grid -->
        <div class="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-12">
          <!-- Bread Crumbs -->
          <div class="bread_crumbs lg:row-start-1 lg:row-end-2 lg:col-span-full">
            <span>
              <NuxtLink to="/">首頁</NuxtLink>
            </span>
            >
            <span>所有商品</span>
          </div>
          <!-- title -->
          <div class="title lg:row-start-2 lg:row-end-3 lg:col-span-full">
            <h1 class="text-4xl font-semibold text-center mb-3">
              所有商品
            </h1>
          </div>
          <!-- order -->
          <div class="sort_by mb-3 flex flex-col lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-3">
            <div class="mb-5 flex flex-col lg:block">
              <label for="" class="mb-2">排列方式</label>
              <select id="" name="" class="border border-[#B1B1B1] py-2 pl-4 pr-6 text-sm">
                <option value="">
                  特色
                </option>
                <option value="">
                  按字母順序, A-Z
                </option>
                <option value="">
                  按字母順序, Z-A
                </option>
                <option value="">
                  價錢, 從低到高
                </option>
                <option value="">
                  價錢, 從高到低
                </option>
                <option value="">
                  日期, 從新到舊
                </option>
                <option value="">
                  日期, 從舊到新
                </option>
              </select>
            </div>
            <!-- categories -->
            <div class="categories hidden lg:block lg:row-start-4 lg:row-end-5">
              <span class="text-xl font-semibold">類別</span>
              <div class="">
                <div>
                  <NuxtLink :to="{path: 'products', query: {category: '上衣'}}">
                    上衣
                  </NuxtLink>
                </div>
                <div>
                  <NuxtLink :to="{path: '/products', query: {category: '外套'}}">
                    外套
                  </NuxtLink>
                </div>
                <div>
                  <a href="" @click.stop.prevent="changeCategory('背心')">
                    背心
                  </a>
                </div>
                <div>
                  <a href="">
                    襯衫
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- prod_list -->
          <div v-if="products" class="list_prods grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 lg:row-start-3 lg:col-start-4 lg:col-end-13">
            <div
              v-for="prod in products"
              :key="prod.id"
              class="prod"
            >
              <NuxtLink :to="`/products/${prod.id}`" class="h-full flex flex-col">
                <div class="prod_img relative bg-black">
                  <img :src="prod.images[0].url" alt="" class="h-full w-full object-cover">
                  <img :src="prod.images[1].url" alt="" class="h-full w-full object-cover hidden">
                </div>
                <div class="prod_info flex flex-col justify-between p-3 text-center grow">
                  <p class="prod_info_name text-sm">
                    {{ prod.name }}
                  </p>
                  <p class="prod_info_price text-sm font-semibold">
                    NT$ {{ prod.price }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const category = ref(route.query.category)
// fetch the products
// laravel App.key 沒有的話會阻擋 fetch 資料
const { data: products, refresh } = await useFetch(() => 'http://127.0.0.1:8000/api/products', {
  query: { category },
  initialCache: false
})

onBeforeRouteUpdate((to) => {
  category.value = to.query.category
  // refetch
  refresh()
})
// 沒有 next
// onBeforeRouteUpdate((to) => {
//   const { category } = to.query
//   const { data } = useFetch('http://127.0.0.1:8000/api/products', {
//     method: 'GET',
//     query: { category },
//     initialCache: false,
//     server: false
//   })
//   products = data
// })
// const route = useRoute()
// const fullPath = route.fullPath
// const params = fullPath.substring(1).split('/')
// const crumbs = []

// let path = ''

// params.forEach((param) => {
//   path = `${path}/${param}`
//   const match = fullPath.match(path)

//   if (match !== null) {
//     crumbs.push(path)
//   }
// })

// console.log(crumbs)
// const crumbs = computed(() => {
//   const fullPath = route.fullPath
//   const params = fullPath.substring(1).split('/')
//   const crumbs = []
//   let path = ''

//   params.forEach((param, index) => {
//     path = `${path}/${param}`

//     console.log(path)
//   })
//   return crumbs
// })
</script>

<style scoped>
.prod {
  box-shadow: 0 3px 20px rgba(0,0,0,0.1)
}

.prod_img:hover img:first-child{
  display: none;
}

.prod_img:hover img:nth-child(2) {
  display: inline;
}
</style>
