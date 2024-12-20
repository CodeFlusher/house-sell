<template>
  <div class="mt-2">
    <label for="card" class="text-style-title text-xl"> {{title}} </label>
    <KitCardClickable id="card" class="flex p-2" @click="toggle">
      <slot name="button" class=""> </slot>
      <ChevronDownIcon class=" size-6 ml-auto text-black dark:text-white"/>
    </KitCardClickable>
    <div class="relative translate-y-1/2 transition-all duration-400 opacity-0 pointer-events-none" :class="{'opacity-100 pointer-events-auto': isVisible}">
      <slot name="items" ></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ChevronDownIcon} from "@heroicons/vue/24/solid";

const items = ref<HTMLElement>()

const isVisible = ref<boolean>(false);

const toggle = ()=>{
  isVisible.value = !isVisible.value;
}

const props = defineProps({
  title: String,
})

</script>