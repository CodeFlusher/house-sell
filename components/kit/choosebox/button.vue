<template>
  <div class="mt-2">
    <label for="card" class="text-style-title text-xl"> {{title}} </label>
    <KitCardClickable id="card" class="flex p-2">
      <slot name="button" class=""> </slot>
      <ChevronDownIcon class=" size-6 ml-auto text-black dark:text-white"/>
    </KitCardClickable>
  </div>
</template>

<script setup lang="ts">

import {ChevronDownIcon} from "@heroicons/vue/24/solid";

const props = defineProps({
  title: String,
})

</script>