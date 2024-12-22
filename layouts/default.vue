<template>
  <NuxtLoadingIndicator color="#fed7aa" :height="1"/>
  <SiteHeaderNormal class="fixed top-0 left-0 w-full h-16" @toggleMenu="menuActive=!menuActive"/>
  <SiteMenu class="fixed w-screen opacity-0 top-0 left-0 h-full transition-all duration-200 md:hidden transform-gpu origin-left -translate-x-1/2 pointer-events-none" :class="{'pointer-events-auto translate-x-0 opacity-100' : menuActive}" @toggleMenu="menuActive=!menuActive"/>
  <div class="pt-16 min-h-screen flex" :class="{'max-md:pointer-events-none': menuActive}">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const menuActive = ref<boolean>(false)
</script>