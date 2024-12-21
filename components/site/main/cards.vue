<template>

  <div class="max-w-full mx-auto flex flex-col gap-6" >
    <div class="blur-3xl size-96 bg-orange-300 dark:opacity-30 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full hidden dark:visible"></div>
    <h2 class="font-extrabold text-4xl text-black dark:text-white text-center z-0 px-4"> {{$t('ui.pages.main.cards')}}</h2>
    <ul class=" w-full flex mx-auto gap-4 p-4 h-fit overflow-x-scroll no-scrollbar " @wheel="applyHorizontalScroll">
      <SiteCardPlus v-for="item in cards" :name="item.name" :description="item.description" :icon="item.icon"></SiteCardPlus>
    </ul>
  </div>

</template>

<script setup lang="ts">

import {applyHorizontalScroll} from "~/utils/horizontalScroll";
import type {MainPageCard} from "~/types/dynamic.front";

import {PaintBrushIcon} from "@heroicons/vue/24/solid";
import {CircleStackIcon} from "@heroicons/vue/24/solid";
import {HomeIcon} from "@heroicons/vue/24/solid";
import {DocumentIcon } from "@heroicons/vue/24/solid";

const cards = ref<MainPageCard[]>([{
  name: 'ui.pages.cards.design.name',
  description: 'ui.pages.cards.design.description',
  icon: PaintBrushIcon,
},{
  name: 'ui.pages.cards.plan.name',
  description: 'ui.pages.cards.plan.description',
  icon: DocumentIcon,
},{
  name: 'ui.pages.cards.build.name',
  description: 'ui.pages.cards.build.description',
  icon: HomeIcon,
},{
  name: 'ui.pages.cards.hq.name',
  description: 'ui.pages.cards.hq.description',
  icon: CircleStackIcon,
}])

const image = ref<String>('https://media.discordapp.net/attachments/638787427728621578/1317190295053402112/hero-image.jpg?ex=675dc88e&is=675c770e&hm=f8a77ef976181a2a45c10b02badc95c6640bc154b35e2703e0392ea8fc449ec2&=&format=webp&width=550&height=309');
</script>