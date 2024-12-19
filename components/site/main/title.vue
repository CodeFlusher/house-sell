
<template>
  <img class="min-h-[60%] max-h-[60%] w-screen object-cover flex z-10 text-center text-2xl text-black dark:text-white" :src="imageURL" :alt="$t('ui.site.image404')"/>
  <div class=" w-screen absolute left-1/2 top-1/3 z-20 -translate-x-1/2 -translate-y-1/2  backdrop-blur-lg md-gradient-mask-horizontal-lg px-4 py-8 md:px-24 ">
    <div class="mx-auto lg:max-w-[60%]">
      <h1 class="text-style-title text-4xl xl:text-6xl text-center font-extrabold leading-tight">
        {{$t('ui.pages.title.main')}}
      </h1>

      <h2 class="text-style-title text-2xl xl:text-4xl text-center">
        {{$t('ui.pages.title.description')}}
      </h2>
    </div>

  </div>
</template>

<script setup lang="ts">

const imageURL = ref<string>('https://media.discordapp.net/attachments/638787427728621578/1317190295053402112/hero-image.jpg?ex=6763b74e&is=676265ce&hm=f498bb51ba3b00da272ffeb807f6cd65c487c6dd3d7c7d9a04fee7f810dcf3de&=&format=webp&width=550&height=309')

</script>
