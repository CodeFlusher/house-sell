<template>

  <div class="sm:flex gap-4 mt-12 border-x border-b rounded-3xl p-4 border-orange-400 px-8 backdrop-brightness-125 bg-opacity-5 bg-orange-200 backdrop-blur-xl">
    <div class="-translate-y-1/4 flex flex-col gap-2">
      <img class="rounded-full mx-auto dark:text-white text-lg aspect-square w-40 object-cover" :src="image" alt="pfp" />
      <div class="flex flex-col">
        <ul class="grid grid-rows-1 grid-cols-5 w-fit mx-auto gap-2">
          <StarIcon v-for="index in [1,2,3,4,5]" class="size-4 " :class="index <= rating ? 'text-orange-500' : 'text-neutral-500'"></StarIcon>
        </ul>
        <span class="text-xl font-bold text-neutral-800 dark:text-neutral-300 mx-auto">
          {{rating.toPrecision(2)}} / 5.0
        </span>
      </div>
    </div>
    <div class="w-full flex-col flex">
      <div class="h-full flex flex-col max-h-48">
        <h3 class="text-3xl text-black font-bold dark:text-white">
          {{props.name}}
        </h3>
        <span class="text-xl align-text-top text-neutral-800 dark:text-neutral-300 break-words overflow-scroll no-scrollbar">
          {{props.description}}
        </span>
      </div>
      <ButtonText :text="$t('ui.pages.cards.designer.see_works')" class="ml-auto" classoverride="text-lg"></ButtonText>
    </div>
  </div>

</template>

<script setup lang="ts">
    import type {DesignerCard} from "~/types/dynamic.front";

    import {StarIcon} from "@heroicons/vue/24/solid";

    const props = defineProps<DesignerCard>();
</script>