
<template>
  <img class="min-h-[60vh] max-h-[60vh] w-screen object-cover flex z-10 text-center text-2xl text-black dark:text-white" :src="imageURL" :alt="$t('ui.site.image404')"/>
  <div class=" w-full absolute left-1/2 top-1/3 z-20 -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg backdrop-brightness-[80%] md-gradient-mask-horizontal-lg px-4 py-8 md:px-24 ">
    <div class="mx-auto lg:max-w-[60%]">
      <h1 class="text-4xl xl:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-orange-400">
        {{$t('ui.pages.title.main')}}
      </h1>

      <h2 class=" text-2xl xl:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-t from-zinc-200  to-zinc-100 ">
        {{$t('ui.pages.title.description')}}
      </h2>
    </div>

  </div>
</template>

<script setup lang="ts">

const imageURL = ref<string>('/images/order/house/large.png')

</script>
