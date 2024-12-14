

<template>
  <h2 class="font-normal text-xl text-neutral-700 dark:text-neutral-100"> {{props.text}} </h2>
</template>

<script setup lang="ts">
  const props = defineProps({
    text: String,
  })
</script>