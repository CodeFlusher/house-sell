<template>
  <button class=" bg-orange-600 h-fit hover:bg-orange-500 rounded-xl text-white p-2 px-4 transition-colors " :class="classoverride"> {{props.text}} </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  classoverride: String,
})
</script>
