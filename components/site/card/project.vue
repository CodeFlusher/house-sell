<template>

  <KitCardNormal class="lg:aspect-[2/1]">

    <div class="w-full aspect-[2/1]">
      <img class="text-style-normal text-center h-full w-full object-cover rounded-xl" :src="img" alt="The building image">
    </div>

    <div class="w-full p-4 flex flex-col gap-2 w-full">
      <h1 class="text-style-title text-2xl">{{props.name}}</h1>
      <div class="h-0.5 dark:bg-neutral-900 bg-neutral-300 bg-opacity-25 w-full"></div>
      <h2 class="text-style-normal text-xl">{{props.description}}</h2>

      <div class="mt-auto w-full">
        <div class="flex flex-col">
          <span class="text-style-normal text-xl">
            {{$t('ui.pages.projects.price')}}:
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 font-extrabold">{{ '$' + props.price.toFixed(0) }}</span>
          </span>
          <span class="text-style-normal text-xl">
            {{$t('ui.pages.projects.area')}}:
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 font-extrabold">{{ props.area.toFixed(0) }}m²</span>
          </span>

        </div>
        <ul class="flex my-2 gap-2 w-full overflow-x-scroll no-scrollbar" @wheel="applyHorizontalScroll">
          <KitTextIcon v-if="planState" :component="DocumentIcon">{{$t('ui.pages.order.phase.plan')}}</KitTextIcon>
          <KitTextIcon v-if="designState" :component="PaintBrushIcon">{{$t('ui.pages.order.phase.design')}}</KitTextIcon>
          <KitTextIcon v-if="buildState" :component="HomeIcon">{{$t('ui.pages.order.phase.build')}}</KitTextIcon>
          <KitTextIcon v-if="renewState" :component="WrenchScrewdriverIcon">{{$t('ui.pages.order.phase.renovation')}}</KitTextIcon>
        </ul>

      </div>
    </div>


  </KitCardNormal>

</template>

<script setup lang="ts">
import type {ProjectProductCard} from "~/types/dynamic.front";

import {DocumentIcon} from "@heroicons/vue/24/solid";
import {PaintBrushIcon} from "@heroicons/vue/24/solid";
import {HomeIcon} from "@heroicons/vue/24/solid";
import {WrenchScrewdriverIcon} from "@heroicons/vue/24/solid";

const props = defineProps<ProjectProductCard>()
</script>
