<template>
  <header class="backdrop-blur-xl flex px-4 z-20 backdrop-brightness-75 border-b border-neutral-200 dark:border-neutral-900 border-opacity-40">
    <LazyNuxtLinkLocale class="flex my-auto gap-4 " to="/">
      <Bars3Icon class="size-8 my-auto dark:text-white hover:text-orange-300 sm:hidden bg-opacity-0 transition-colors duration-200 "/>
      <HomeModernIcon class="size-10 my-auto aspect-square text-black dark:text-white hover:text-orange-300 transition-colors duration-200"  > </HomeModernIcon>
      <NavigationTab class="hidden sm:block" classOverride="font-bold text-2xl mt-1.5" title="Project Household" ></NavigationTab>
    </LazyNuxtLinkLocale>

    <div class="flex ml-auto gap-2">
      <LazyNuxtLinkLocale class="my-auto hidden sm:block" v-for="path in routerPaths" :to="path">
        <NavigationTab class="my-auto p-2" class-override="text-xl font-bold" :title="$t('ui.header.pages.' + path)" > </NavigationTab>
      </LazyNuxtLinkLocale>

      <button class="hidden sm:block bg-opacity-0 hover:bg-opacity-25 bg-orange-300 h-fit border border-neutral-300 dark:border-neutral-800 hover:border-orange-300 text-xl rounded-xl text-white p-2 transition-colors duration-200 my-auto">
        <UserIcon class="size-6 my-auto "/>
      </button>

      <LanguagePicker></LanguagePicker>
    </div>

  </header>
</template>

<script setup lang="ts">
import {UserIcon} from "@heroicons/vue/24/solid";
import {Bars3Icon} from "@heroicons/vue/24/solid";
import {HomeModernIcon} from "@heroicons/vue/24/solid";

const router = useRouter();


const routerPaths = ref<String[]>([
    'order',
    'projects'
])

</script>