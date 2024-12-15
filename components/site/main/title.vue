
<template>
  <div class="blur-[128px] bg-green-500 absolute size-96 right-1/2 xl:right-[16%] translate-x-1/2 -translate-y-1/2 top-1/2 xl:top-1/4 self-center -z-10"> </div>

  <div class="m-12 xl:m-24 md:mr-auto flex flex-col gap-2 p-4 rounded-xl z-0 shadow-xl dark:shadow-none xl:max-w-[33%]">
    <LazyNuxtLinkLocale class="flex my-auto gap-2" to="/">
      <HomeModernIcon class="size-12 my-auto aspect-square text-black dark:text-white" > </HomeModernIcon>
      <NavigationTab classOverride="font-extrabold text-4xl" title="Project Household" ></NavigationTab>
    </LazyNuxtLinkLocale>
    <span class="text-neutral-800 dark:text-neutral-300 text-2xl text-wrap ">
      {{ $t('ui.pages.main.description') }}
    </span>
    <div class="flex gap-2 w-full justify-between">
      <LazyNuxtLinkLocale to="/projects">
        <ButtonText :text="$t('ui.pages.main.watch_works')"></ButtonText>
      </LazyNuxtLinkLocale>
      <LazyNuxtLinkLocale to="/order">
        <NavigationTab :title="$t('ui.pages.main.shop')"></NavigationTab>
      </LazyNuxtLinkLocale>
    </div>
  </div>
  <div>
    <NuxtImg class="rounded" >  </NuxtImg>
  </div>
</template>

<script setup lang="ts">

import {HomeModernIcon} from "@heroicons/vue/24/solid";

</script>
