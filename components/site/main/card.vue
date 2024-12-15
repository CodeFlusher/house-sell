<template>
  <div class="border border-neutral-200 dark:border-neutral-800 shadow-lg dark:shadow-none rounded-xl p-4 flex gap-2 max-w-96 min-w-96 backdrop-blur-xl backdrop-brightness-110">


    <component :is="icon" class="size-6 min-w-6 mt-1 dark:text-white"></component>
    <div>
      <h2 class="text-2xl text-black dark:text-white font-bold"> {{$t(String(name))}}</h2>
      <span class="text-xl text-neutral-800 dark:text-neutral-400"> {{$t(String(description))}}</span>
    </div>
  </div>

</template>



<script setup lang="ts">
import type {MainPageCard} from "~/types/dynamic.front";

const props = defineProps<MainPageCard>();

</script>