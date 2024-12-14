<template>
  <button class=" bg-green-600 h-fit hover:bg-green-500 text-2xl rounded-xl text-white p-2 px-4 transition-colors "> {{props.text}} </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
})
</script>
