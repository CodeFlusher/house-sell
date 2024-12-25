<template>
  <main class="mt-8 mx-auto p-4 flex flex-col">
    <h2 class="text-4xl font-extrabold bg-gradient-to-t mx-auto text-black dark:text-white break-words px-4">
      {{$t('ui.pages.main.designers')}}
    </h2>
    <ul class="">
      <Transition v-for="item in data"
        enter-from-class="translate-y-1/2"
        enter-to-class="translate-y-0"
        appear>
        <SiteCardDesigner :description="item.description" :name="item.name" :image="item.image" :rating="item.rating"></SiteCardDesigner>
      </Transition>
    </ul>
  </main>
</template>

<script setup lang="ts">

import type {DesignerCard} from "~/types/dynamic.front";

const data = ref<Array<DesignerCard>>([{
  name: "Emelya",
  image: "/images/pfp/emelya.png",
  description: "Team leader for a build our most powerful and skilled team - 'Omni Build Team'",
  rating: 4
},{
  name: "Egor",
  image: "https://avatars.githubusercontent.com/u/50952974?v=4",
  description: "Front-end developer for this internet resource - Project Household",
  rating: 5
}])


</script>