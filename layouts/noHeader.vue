<template>
  <NuxtLoadingIndicator color="#fed7aa" :height="1"/>
  <div class="min-h-screen flex" :class="{'max-md:pointer-events-none': menuActive}">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const menuActive = ref<boolean>(false)
</script>