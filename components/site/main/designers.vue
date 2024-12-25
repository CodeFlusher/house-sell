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
  image: "https://media.discordapp.net/attachments/1139268874257322068/1194551360419541072/attachment-7.gif?ex=6763d2a6&is=67628126&hm=6ce0a327848527b2434ff342b597c7a116da58141e985b40d46bfdaea21ad93a&",
  description: "Team leader for a build our most powerful and skilled team - 'Omni Build Team'",
  rating: 4
},{
  name: "Egor",
  image: "https://media.discordapp.net/attachments/707912596333789235/1319285275297316884/IMG_20241218_013200_518.jpg?ex=676567a8&is=67641628&hm=f41020aeafe805bc220f5532f0ed392c6c2f382e0e9f7e91ebaee2e586efe096&=&format=webp&width=302&height=670",
  description: "Front-end developer for this internet resource - Project Household",
  rating: 2.7
}])


</script>