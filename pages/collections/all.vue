<template>
  <div>
    <div class="container mx-auto px-4 py-8 md:p-8">
      <main>
        <!-- grid -->
        <div class="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-12">
          <!-- Bread Crumbs -->
          <div class="bread_crumbs lg:row-start-1 lg:row-end-2 lg:col-span-full">
            <span>
              <a href="/">首頁</a>
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
            <!-- categories -->
            <br />
            <div class="categories hidden lg:block lg:row-start-4 lg:row-end-5">
              <span class="text-xl font-semibold">類別</span>
              <div class="">
                <div>
                  <a href="">
                    上衣
                  </a>
                </div>
                <div class="leading-7">
                  <a href="">
                    People Footwear(加拿大拖鞋品牌)
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- prod_list -->
          <div class="list_prods grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 lg:row-start-3 lg:row-end-5 lg:col-start-4 lg:col-end-13">
            <div class="prod h-full">
              <div class="prod_img">
                <img src="https://cdn.store-assets.com/s/274811/i/59927725.jpeg?width=480&format=webp" alt="" class="object-cover">
              </div>
              <div class="prod_info p-3 text-center">
                <div class="prod_info_name text-sm">
                  ADAM 無葉掛脖風扇 三色
                </div>
                <div class="prod_info_price text-sm font-semibold">
                  NT$ 890
                </div>
              </div>
            </div>
            <div class="prod h-full">
              <div class="prod_img">
                <img src="https://cdn.store-assets.com/s/274811/i/59764434.jpeg?width=480&format=webp" alt="" class="object-cover">
              </div>
              <div class="prod_info p-3 text-center">
                <div class="prod_info_name text-sm break-words">
                  WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色
                </div>
                <div class="prod_info_price text-sm font-semibold">
                  NT$ 3,380
                </div>
              </div>
            </div>
            <div class="prod h-full">
              <div class="prod_img">
                <img src="https://cdn.store-assets.com/s/274811/i/59927725.jpeg?width=480&format=webp" alt="" class="object-cover">
              </div>
              <div class="prod_info p-3 text-center">
                <div class="prod_info_name text-sm">
                  ADAM 無葉掛脖風扇 三色
                </div>
                <div class="prod_info_price text-sm font-semibold">
                  NT$ 890
                </div>
              </div>
            </div>
            <div class="prod h-full">
              <div class="prod_img">
                <img src="https://cdn.store-assets.com/s/274811/i/59764434.jpeg?width=480&format=webp" alt="" class="object-cover">
              </div>
              <div class="prod_info p-3 text-center">
                <div class="prod_info_name text-sm">
                  WODEN X Azurer 2023 Spring & Summer Azurer INCENSE CHAMBER 藍色
                </div>
                <div class="prod_info_price text-sm font-semibold">
                  NT$ 3,380
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const fullPath = route.fullPath
const params = fullPath.substring(1).split('/')
const crumbs = []

let path = ''

params.forEach((param) => {
  path = `${path}/${param}`
  const match = fullPath.match(path)

  if (match !== null) {
    crumbs.push(path)
  }
})

console.log(crumbs)
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

<style>
.prod {
  box-shadow: 0 3px 20px rgba(0,0,0,0.1)
}
</style>
