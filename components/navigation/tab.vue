<template>

  <div class="flex flex-col w-fit p-2" @mouseenter="isHovered=true" @mouseleave="isHovered=false">
    <h2 class="mt-2 font-normal text-2xl self-center text-black dark:text-white " :class="overrideClass"> {{props.title}}</h2>
    <div class="bg-black dark:bg-white h-0.5 bg-transparent transition-all duration-200 w-0  "  :class="{'w-full ml-0 mr-auto' : isHovered}"></div>
  </div>

</template>

<script setup lang="ts">

const isHovered = ref<Boolean>(false);

const props = defineProps({
  title: String,
  overrideClass: String,
})

</script>