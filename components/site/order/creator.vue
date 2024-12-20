<template>

  <div class="w-fit grid grid-cols-2 mx-auto gap-4">
    <HoverCard class="p-4 w-96">
      <h1 class="text-style-title text-2xl">
        {{$t('ui.pages.orders.title')}}
      </h1>
      <span class="text-style-normal text-xl">
        {{$t('ui.pages.orders.description')}}
      </span>
      <KitSlider :label="$t('ui.pages.order.area')" class="mt-4" :min="10" :max="300" />
    </HoverCard>

    <img src="">
  </div>

</template>

<script setup lang="ts">



</script>