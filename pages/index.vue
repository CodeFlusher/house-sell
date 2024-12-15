<template>
  <div class="h-full w-full flex flex-col">
    <SiteMainTitle/>
<!--    <SiteMainTopBanner></SiteMainTopBanner>-->
    <div class="max-w-full mx-auto no-scrollbar">
      <ul class="flex mx-auto gap-4 p-2 h-fit overflow-x-scroll" @wheel="applyHorizontalScroll">
        <SiteMainCard v-for="item in cards" :name="item.name" :description="item.description" :icon="item.icon"></SiteMainCard>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {MainPageCard} from "~/types/dynamic.front";

import {applyHorizontalScroll} from "~/utils/horizontalScroll";
import {FolderIcon} from "@heroicons/vue/24/solid";

const cards = ref<MainPageCard[]>([{
  name: 'ui.pages.cards.design.name',
  description: 'ui.pages.cards.design.description',
  icon: FolderIcon,
},{
  name: 'ui.pages.cards.plan.name',
  description: 'ui.pages.cards.plan.description',
  icon: FolderIcon,
},{
  name: 'ui.pages.cards.build.name',
  description: 'ui.pages.cards.build.description',
  icon: FolderIcon,
},{
  name: 'ui.pages.cards.hq.name',
  description: 'ui.pages.cards.hq.description',
  icon: FolderIcon,
}])
</script>
