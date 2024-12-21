<template>

  <div class="sm:flex gap-4 max-lg:w-full w-[60%] mx-auto mt-12 border-x border-b rounded-3xl p-4 border-transparent hover:border-orange-400 px-8 backdrop-brightness-125 hover:bg-orange-200 hover:bg-opacity-5 backdrop-blur-xl transition-colors ">
    <div class="-translate-y-1/4 flex flex-col gap-2">
      <img class="rounded-full mx-auto dark:text-white text-lg aspect-square w-40 object-cover text-center" :src="image" alt="pfp" />
      <div class="hidden sm:block fixed blur-3xl w-full aspect-square rounded-full bg-orange-300 -z-10 "></div>
      <RatingColumn :rating="rating"></RatingColumn>
    </div>
    <div class="w-full flex-col flex">
      <div class="h-full flex flex-col max-h-48">
        <h3 class="text-3xl text-style-title">
          {{props.name}}
        </h3>
        <span class="text-xl align-text-top text-style-normal break-words overflow-scroll no-scrollbar">
          {{props.description}}
        </span>
      </div>
      <ButtonText :text="$t('ui.pages.cards.designer.see_works')" class="ml-auto mt-2" classoverride="max-md:w-full text-lg"></ButtonText>
    </div>
  </div>

</template>

<script setup lang="ts">
    import type {DesignerCard} from "~/types/dynamic.front";

    import {StarIcon} from "@heroicons/vue/24/solid";

    const props = defineProps<DesignerCard>();
</script>