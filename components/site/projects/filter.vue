<template>

  <KitCardNormal>
    <div class="flex flex-col gap-4 backdrop-blur-0 p-4 w-96">
      <XMarkIcon class="text-style-normal xl:hidden size-6 dark:hover:text-orange-300 hover:text-orange-600" @click="$emit('toggleFilter')"/>
      <h1 class="text-style-title text-2xl">
        {{$t('ui.pages.projects.filter.title')}}
      </h1>

      <div class="w-full bg-neutral-300 dark:bg-neutral-900 h-0.5"> </div>

      <SiteToolsBuildTypeChooser v-model="item"/>

      <div class="w-full bg-neutral-300 dark:bg-neutral-900 h-0.5"> </div>

      <div class="grid grid-cols-2">
        <h3 class="text-style-normal text-xl self-center"> {{$t('ui.pages.projects.min_area')}}, m²</h3>
        <KitInputField :enabled="true" v-model:input="minValue" :placeholder="$t('ui.pages.projects.min_area.placeholder')" type="text"/>
      </div>
      <div class="grid grid-cols-2">
        <h3 class="text-style-normal text-xl self-center"> {{$t('ui.pages.projects.max_area')}}, m²</h3>
        <KitInputField :enabled="true" v-model:input="maxValue" :placeholder="$t('ui.pages.projects.max_area.placeholder')" type="text"/>
      </div>

      <div class="w-full bg-neutral-300 dark:bg-neutral-900 h-0.5"> </div>

      <label for="phase_chooser" class="text-style-title">
        {{$t('ui.pages.projects.filter.phases')}}
      </label>

      <ul id="phase_chooser" class="flex flex-col gap-2">
        <KitCheckboxController  class="" v-model:active="plan">
          <span class="text-style-normal text-xl">{{$t('ui.pages.order.phase.plan')}}</span>
        </KitCheckboxController>
        <KitCheckboxController  class="" v-model:active="design">
          <span class="text-style-normal text-xl">{{$t('ui.pages.order.phase.design')}}</span>
        </KitCheckboxController>
        <KitCheckboxController  class="" v-model:active="build">
          <span class="text-style-normal text-xl">{{$t('ui.pages.order.phase.build')}}</span>
        </KitCheckboxController>
        <KitCheckboxController  class="" v-model:active="renew">
          <span class="text-style-normal text-xl">{{$t('ui.pages.order.phase.renovation')}}</span>
        </KitCheckboxController>
      </ul>

      <div class="w-full bg-neutral-300 dark:bg-neutral-900 h-0.5"> </div>

      <KitCheckboxController
          v-model:active="strict"
        >
        <span class="text-style-normal text-xl">{{$t('ui.pages.projects.filter.strict')}}</span>

      </KitCheckboxController>

    </div>
  </KitCardNormal>

</template>

<script setup lang="ts">

import {XMarkIcon} from "@heroicons/vue/24/solid";

const emits = defineEmits(['toggleFilter'])

const minValue = defineModel<number>('min');
const maxValue = defineModel<number>('max');

const plan = defineModel<boolean>('plan');
const design = defineModel<boolean>('design');
const build = defineModel<boolean>('build');
const renew = defineModel<boolean>('renew');

const item = defineModel<string>('buildingType');

const strict = defineModel<boolean>('strict');

</script>
