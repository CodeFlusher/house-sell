

<script setup lang="ts">
import {GlobeAltIcon} from "@heroicons/vue/24/solid";

import {useSwitchLocalePath} from "#imports";

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

</script>

<template>
  <HeadlessMenu>
    <HeadlessMenuButton class="text-2xl dark:text-white"> <GlobeAltIcon class="size-6 text-bold"></GlobeAltIcon> </HeadlessMenuButton>
    <HeadlessMenuItems class="absolute right-4 top-full flex h-fit flex-col gap-2 p-2 z-10 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg backdrop-blur-md transition-200">
      <HeadlessMenuItem class="block w-36 hover:bg-lime-200 dark:hover:bg-lime-800 rounded-md p-2 transition-colors duration-200" v-slot="{ active }" v-for="locale in availableLocales">
        <NuxtLink  :key="locale" :to="switchLocalePath(locale)" class="text-xl dark:text-white">
          {{$t('ui.locale.' + locale)}}
        </NuxtLink>
      </HeadlessMenuItem>

    </HeadlessMenuItems>
  </HeadlessMenu>
</template>
