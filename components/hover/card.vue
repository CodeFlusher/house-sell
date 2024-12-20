<template>
  <div class="backdrop-blur-lg rounded-xl bg-transparent border border-neutral-200 dark:border-neutral-800 backdrop-brightness-125" :class="overrideclass">
    <slot/>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    overrideclass: String,
  })
</script>
