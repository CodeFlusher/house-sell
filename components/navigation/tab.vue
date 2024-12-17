<template>

  <div class="flex flex-col w-fit " @mouseenter="isHovered=true" @mouseleave="isHovered=false">
    <h2 class="text-2xl self-center text-black dark:text-white" :class="classOverride"> {{props.title}}</h2>
    <div class="bg-black dark:bg-white h-0.5 transition-all duration-200 w-0" :class="{'w-full ml-0 mr-auto' : isHovered}"></div>
  </div>

</template>

<script setup lang="ts">

const isHovered = ref<Boolean>(false);

const props = defineProps({
  title: String,
  classOverride: String,
})

</script>