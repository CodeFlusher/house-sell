
<template>
  <div class="flex flex-col">
    <ul class="grid grid-rows-1 grid-cols-5 w-fit mx-auto gap-2">
      <StarIcon v-for="index in [1,2,3,4,5]" class="size-4 " :class="index <= rating ? 'text-orange-500' : 'text-neutral-500'"></StarIcon>
    </ul>
    <span class="text-xl text-style-title mx-auto">
          {{rating.toFixed(1)}} / 5.0
        </span>
  </div>
</template>

<script setup lang="ts">

import {StarIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
  rating: Number,
})
</script>
