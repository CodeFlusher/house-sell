<template>

  <KitCardNormal class="flex aspect-[2/1]">

    <div class="w-[50%] w-full">
      <img class="text-style-normal text-center h-full w-full object-cover rounded-l-xl" :src="img" alt="The building image">
    </div>

    <div class="w-full p-2 flex flex-col gap-2 w-full">
      <h1 class="text-style-title text-2xl">{{props.name}}</h1>
      <div class="h-0.5 dark:bg-neutral-900 bg-neutral-300 bg-opacity-25 w-full"></div>
      <h2 class="text-style-normal text-xl">{{props.description}}</h2>
      <ul class="flex">

      </ul>
      <KitButtonText class="mt-auto"> {{$t('ui.pages.projects.goto')}}</KitButtonText>
    </div>


  </KitCardNormal>

</template>

<script setup lang="ts">
import type {ProjectProductCard} from "~/types/dynamic.front";

const props = defineProps<ProjectProductCard>()
</script>
