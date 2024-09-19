<template>
  <header>
    <nav class="nav">
       <img src="/public/img/cnknot.png" alt="">
      <ul class="nav_text">
        <li>文化</li>
        <li>小小</li>
      </ul>
    </nav>
   <!--  <NuxtLink class="logo" to="/video">aaaa</NuxtLink> -->
  </header>

  <div class="ads_banner">
      <span>
       {{banner}}
      </span>
  </div>

  <div class="food">
     <div class="xtx_panel_header">
       <h3>{{hFood}}</h3>
       <small>{{sFood}}</small>
     </div>
     <div class="grid_container">
       <FoodItem v-for="food in foods" :key="food.id" :food="food" />

     </div>
   </div>

   <div class="food">
     <div class="xtx_panel_header">
       <h3>{{hCulture}}</h3>
       <small>{{sCulture}}</small>
     </div>
     <div class="grid_container">
       <FoodItem v-for="food in foods" :key="food.id" :food="food" />
     </div>
   </div>

   <div class="about">
     <h1>thank you</h1>
   </div>

</template>


<style scoped lang="scss">
@import "@/assets/styles/colors.scss";

.nav {
  height: 55px;
  width: auto;
  display: flex;
  background-color: $main-color;
  font-size: 16px;
  line-height: 53px;
  
  color: $banner-text-color;  
  padding: 5px;

  img {
    height: 50px;
    width: 50px;
    margin-left: 200px;
  }

  ul {
    margin-left: 730px;
    align-items: center;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    gap: 50px;
    li {
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -15px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid $banner-text-color;
      }
    }
  }
}

.ads_banner {
  background: antiquewhite;
  height: 300px;
  position: relative;
  display: flex;

  span {
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    padding: 10px;
  }
}

.food {
  padding: 20px;

  .grid_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 每行 3 列 */
    gap: 10px; /* 项之间的间距 */
  }
}

</style>

<script setup lang="ts">

const banner = ref("")

const hCulture = ref("")
const sCulture = ref("")

const hFood = ref("")
const sFood = ref("")

const { data: bannerContent } = await useFetch('/api/base/banner')
console.log('Fetched data:', bannerContent.value.ads_content);
banner.value = bannerContent.value.ads_content

const { data: cultureTitle } = await useFetch('/api/base/culture_title')
if (cultureTitle.value) {
  hCulture.value = cultureTitle.value.h_title
  sCulture.value = cultureTitle.value.s_title
}


const { data: foodTitle } = await useFetch('/api/base/food_title')
hFood.value = foodTitle.value.h_title
sFood.value = foodTitle.value.s_title


const { data: foods } = await useFetch('/api/food')


</script>