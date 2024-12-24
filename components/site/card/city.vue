<template>
  <div class="grid lg:grid-cols-2 lg:gap-4">
    <img class="aspect-[3/1] h-full text-center text-style-normal rounded-t-lg lg:rounded-b-lg object-cover shadow-md shadow-neutral-200 dark:shadow-neutral-800" :src="img" alt="city image">
    <KitCardNormal class="p-4 flex flex-col justify-between " oclass="transition-all duration-200 rounded-none rounded-b-xl lg:rounded-t-xl hover:shadow-orange-300 hover:dark:shadow-neutral-800">
      <div class="flex flex-col">
        <h2 class="mt-4 text-style-title text-4xl max-md:text-center"> {{name}}</h2>
        <span class="text-style-normal text-2xl ">{{description}}</span>
        <span class="text-style-normal text-2xl">{{$t('ui.pages.places.city.projects')}}: <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{{amount}}</span> </span>
        <span class="text-style-normal text-2xl">{{$t('ui.pages.places.city.teams')}}: <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">{{teams}}</span> </span>
      </div>

      <div class="flex max-lg:w-full mt-4">
        <KitButtonText class="max-lg:w-full md:ml-auto"> {{$t('ui.pages.places.city.button')}}</KitButtonText>
      </div>
    </KitCardNormal>
  </div>

</template>

<script setup lang="ts">

import type {PlacesPageCity} from "~/types/dynamic.front";

const props = defineProps<PlacesPageCity>()
</script>
