<template>
  <header class="backdrop-blur-lg flex px-4 z-20 backdrop-brightness-110">
    <LazyNuxtLinkLocale class="flex my-auto gap-2 " to="/">
      <HomeModernIcon class="size-10 my-auto aspect-square text-black dark:text-white" > </HomeModernIcon>
      <NavigationTab classOverride="font-bold" title="Project Household" ></NavigationTab>
    </LazyNuxtLinkLocale>

    <div class="flex ml-auto gap-2">
      <LazyNuxtLinkLocale v-for="path in routerPaths" :to="path">
        <NavigationTab class="my-auto p-2"  :title="$t('ui.header.pages.' + path)" > </NavigationTab>
      </LazyNuxtLinkLocale>

      <button class=" bg-green-600 h-fit hover:bg-green-500 text-xl rounded-xl text-white p-2 transition-colors flex duration-200 my-auto gap-2"> <UserIcon class="size-6 my-auto"/>
        {{ $t('ui.header.auth.button') }}</button>

      <LanguagePicker></LanguagePicker>
    </div>

  </header>
</template>

<script setup lang="ts">
import {UserIcon} from "@heroicons/vue/24/solid";
import {HomeModernIcon} from "@heroicons/vue/24/solid";

const router = useRouter();


const routerPaths = ref<String[]>([
    'order',
    'projects'
])

</script>