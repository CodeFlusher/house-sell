
<template>
  <div class="blur-[128px] bg-green-500 absolute size-96 left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 self-center -z-10"> </div>
  <div class="m-auto my-8 flex flex-col justify-center items-center gap-2">
    <LazyNuxtLinkLocale class="flex my-auto gap-2" to="/">
      <HomeModernIcon class="size-12 my-auto aspect-square text-black dark:text-white" > </HomeModernIcon>
      <NavigationTab override-class="font-bold text-4xl" title="Project Household" ></NavigationTab>
    </LazyNuxtLinkLocale>
    <span class="text-neutral-800 dark:text-neutral-300 text-2xl text-center">
      {{ $t('ui.pages.main.description') }}
    </span>
    <LazyNuxtLinkLocale to="/projects">
      <ButtonText :text="$t('ui.pages.main.watch_works')"></ButtonText>
    </LazyNuxtLinkLocale>
    <LazyNuxtLinkLocale to="/order">
      <NavigationTab :title="$t('ui.pages.main.shop')"></NavigationTab>
    </LazyNuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">

import {HomeModernIcon} from "@heroicons/vue/24/solid";

</script>
