<template>
  <div class=" w-full flex flex-col my-auto ">
    <SiteOrderCreator class="m-auto" />
  </div>

</template>

<script setup lang="ts">

useHead({
  title: 'Place Order'
})

import MousePointerFollower from "~/components/background/mousePointerFollower.vue";
</script>
