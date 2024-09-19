<template>
  <div class="food-item">
    <img :src="food.img" alt="food image" />
    <h3>{{ food.name }}</h3>
    <span>{{ food.summary }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { Food } from '~/types/food'

defineProps<{
  food: Food
}>()

</script>

<style scoped>

.food-item {
  /* Add styles here */
}
</style>
