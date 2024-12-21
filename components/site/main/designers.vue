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
  name: "Egoriy",
  image: "https://media.discordapp.net/attachments/707912596333789235/1319285275297316884/IMG_20241218_013200_518.jpg?ex=676567a8&is=67641628&hm=f41020aeafe805bc220f5532f0ed392c6c2f382e0e9f7e91ebaee2e586efe096&=&format=webp&width=302&height=670",
  description: "Front-end developer for this internet resource - Project Household",
  rating: 2.7
},
  {
    name: 'Vadimiy',
    image: "https://media.discordapp.net/attachments/655398070535585792/1319301464526684192/image.png?ex=676576bc&is=6764253c&hm=4b678760fbfc5cc722b17e18dd2bc5991d00f257e633fac5a9a3ea15bc30851f&=&format=webp&quality=lossless",
    description: "Штурвальеро - онанист, он локальный экстремист",
    rating: 3.1415926535,
  },{
    name: "Ildar",
    image: "https://cdn.discordapp.com/attachments/888096424011645008/1320092106492084284/photo_2024-12-21_21-14-31.jpg?ex=67685714&is=67670594&hm=f7359783592989c19516c65956f36269892badc6ce811d064e73770370f72e87&",
    description: "Казанская гадалка, всезреющая есновидица, вездесущая Светлана и главный амбассадор Голландского Штурвала.",
    rating: 200,
  }])


</script>