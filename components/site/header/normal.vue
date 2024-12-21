<template>
  <KitHeaderBg>
    <Bars3Icon class="md:hidden size-10 my-auto aspect-square text-black dark:text-white hover:text-orange-300 transition-colors duration-200"  @click="$emit('toggleMenu')"> </Bars3Icon>
    <LazyNuxtLinkLocale class="flex my-auto gap-4 max-md:m-auto"  to="/">
      <HomeModernIcon class="size-10 my-auto aspect-square text-black dark:text-white hover:text-orange-300 transition-colors duration-200"  > </HomeModernIcon>
      <NavigationTab>
        <h2 class="self-center text-style-title text-2xl font-bold mt-1.5" > Project Household</h2>
      </NavigationTab>
    </LazyNuxtLinkLocale>

    <div class="flex md:ml-auto gap-2">
      <LazyNuxtLinkLocale class="my-auto max-md:hidden" v-for="path in routerPaths" :to="path">
        <NavigationTab >
          <h2 class="self-center text-style-title text-xl font-bold" > {{$t('ui.header.pages.' + path)}}</h2>
        </NavigationTab>
      </LazyNuxtLinkLocale>

      <button class="max-md:hidden bg-opacity-0 hover:bg-opacity-25 bg-orange-300 h-fit border border-neutral-300 dark:border-neutral-800 hover:border-orange-300 text-xl rounded-xl text-white p-2 transition-colors duration-200 my-auto">
        <UserIcon class="size-6 my-auto "/>
      </button>

      <LanguagePicker></LanguagePicker>

    </div>

  </KitHeaderBg>
</template>

<script setup lang="ts">
import {UserIcon} from "@heroicons/vue/24/solid";
import {Bars3Icon} from "@heroicons/vue/24/solid";
import {HomeModernIcon} from "@heroicons/vue/24/solid";

const route = useRoute();

const isIndex = computed(()=>{

  return route.name.indexOf("index") != -1
})

const emits = defineEmits([
  'toggleMenu'
]);

const routerPaths = ref<String[]>([
    'order',
    'projects',
    'places',
    'history'
])


</script>