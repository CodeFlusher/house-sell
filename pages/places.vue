<template>

  <MousePointerFollower class="z-0"/>
  <div class="mx-auto flex-col md:max-w-[70vw] z-10">
    <SitePlacesTitle/>
    <ul class=" mx-auto grid grid-cols-1 p-4 gap-4">
      <SiteCardCity v-for="item in cities" :amount="item.amount" :name="item.name" :description="item.description" :img="item.img" :teams="item.teams"></SiteCardCity>
    </ul>
    <SitePlacesFooter class="mt-auto mb-4"/>
  </div>

</template>

<script setup lang="ts">

import type {PlacesPageCity} from "~/types/dynamic.front";
import MousePointerFollower from "~/components/background/mousePointerFollower.vue";

const cities = ref<PlacesPageCity[]>([{
  name: "Vologda, Russia",
  description: "The northern city of Vologda is a home city of our company, first ever projects are from here",
  img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Sophia_panorama_2.jpg",
  amount: 15,
  teams: 2
},{
  name: "Kazan, Russia",
  description: "The great city of Kazan, Russia, placed on volga river, is a million citizen city",
  img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Kazan_Kremlin_P8111944_2200.jpg",
  amount: 34,
  teams: 5
},{
  name: "Moscow, Russia",
  description: "The Capital city of Russia",
  img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Moscow_July_2011-16.jpg",
  amount: 129,
  teams: 10
},{
  name: "Minsk, Republic of Belarus",
  description: "The Capital city of Belarus",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/86/Miensk%2C_old_town_%2834221353642%29.jpg",
  amount: 8,
  teams: 1
}])


</script>