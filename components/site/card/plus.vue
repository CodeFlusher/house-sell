<template>
  <div class="border border-neutral-200 dark:border-neutral-800 shadow-lg dark:shadow-none rounded-xl p-4 gap-2 max-w-96 min-w-96 backdrop-blur-xl backdrop-brightness-125 hover:border-orange-300 hover:bg-orange-200 hover:bg-opacity-5 transition duration-200 ease-in-out " >
    <component :is="icon" class="size-12 min-w-6 mt-1 dark:text-white mx-auto"></component>
    <div class="mt-2">
      <h2 class="text-2xl text-style-title text-center"> {{$t(String(name))}}</h2>
      <h3 class="text-xl text-style-normal text-center"> {{$t(String(description))}}</h3>
    </div>
  </div>

</template>



<script setup lang="ts">
import type {MainPageCard} from "~/types/dynamic.front";

const isOver = ref<Boolean>(false);
const props = defineProps<MainPageCard>();

</script>