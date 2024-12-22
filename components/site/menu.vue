<template>
  <div class="bg-neutral-100 dark:bg-neutral-900 z-[1000] p-4 flex flex-col pt-20">
    <label for="menu-pages" class="text-style-title text-3xl">
      {{$t("ui.menu.pages.title")}}
    </label>
    <nav id="menu-pages" class="grid grid-cols-1 gap-2 p-4">
      <NuxtLinkLocale v-for="route in routerPaths" :to="route.id || '/'" @click="$emit('toggleMenu')">
            <div class="flex gap-4 items-center">
              <KitCardNormal class="p-2">
                <component :is="route.icon" class="m-2 size-6 dark:text-white"></component>
              </KitCardNormal>
              <NavigationTab>
                <h2 class="text-style-normal text-2xl text-bold" > {{route.id ? $t('ui.header.pages.' + route.id) : $t('ui.header.pages.index')}}</h2>
              </NavigationTab>
            </div>
      </NuxtLinkLocale>
    </nav>

    <div class="mt-auto w-full">
      <span class="text-style-title text-2xl"> CodeFlusher</span>
      <NuxtLinkLocale to="/auth/login">
        <KitButtonText class="w-full">
          {{$t('ui.header.auth.button')}}
        </KitButtonText>
      </NuxtLinkLocale>
    </div>
  </div>

</template>

<script setup lang="ts">
import type {MobileNavButton} from "~/types/dynamic.front";
import {HomeModernIcon} from "@heroicons/vue/24/solid";
import {GlobeEuropeAfricaIcon} from "@heroicons/vue/24/solid";
import {DocumentIcon} from "@heroicons/vue/24/solid";
import {CurrencyDollarIcon} from "@heroicons/vue/24/solid";
import {ArchiveBoxIcon} from "@heroicons/vue/24/solid";

const emits = defineEmits([
    'toggleMenu',
])

const routerPaths = ref<MobileNavButton[]>([
  {id: "", icon: HomeModernIcon},
  {id: 'order', icon: CurrencyDollarIcon},
  {id: 'projects', icon: DocumentIcon},
  {id: 'places', icon: GlobeEuropeAfricaIcon},
  {id: 'history', icon: ArchiveBoxIcon},
])
</script>