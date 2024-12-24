<template>
  <div>
    <KitInputField class="w-full h-fit" v-model:input="model" @update="updateEvent" :enabled="true" type="text"
                   :placeholder="$t('ui.input.search.placeholder')">
      <MagnifyingGlassIcon class="size-6 text-style-normal my-auto ml-2"/>
    </KitInputField>
    <div class="flex h-fit my-2 px-2">
      <FunnelIcon @click="$emit('toggleFilter')" class="size-12 lg:hidden text-style-normal my-auto"/>
      <ArrowPathRoundedSquareIcon class="size-10 text-style-normal my-auto"/>
      <div class="w-fit px-4 backdrop-blur-0 flex my-auto w-full">
        <KitChooseboxController class=" " v-model:input="order" v-model:active="isActive">
          <template #button>
            <KitChooseboxButton class="w-full text-style-normal" :active="isActive" >
              {{ $t('ui.pages.projects.sort.' + order) }}
            </KitChooseboxButton>
          </template>
          <template #items>
            <KitChooseboxItems>
              <KitChooseboxItem v-for="item in sortType" id="item" class="text-style-normal text-xl" @click="handleClick(item)">
                {{ $t('ui.pages.projects.sort.' + item) }}
              </KitChooseboxItem>
            </KitChooseboxItems>
          </template>
        </KitChooseboxController>

      </div>
      <span class="text-style-title my-auto text-xl"> {{ $t('ui.pages.projects.sort.title') }}</span>
    </div>
  </div>


</template>

<script setup lang="ts">

import {ArrowPathRoundedSquareIcon, FunnelIcon, MagnifyingGlassIcon} from "@heroicons/vue/24/solid";

const model = defineModel<string>('input')
const order = defineModel<string>('order')

order.value = 'price.increase'

const isActive = defineModel<boolean>('active')

const emits = defineEmits(['toggleFilter'])

const updateEvent = (newVal: string) => {
  model.value = newVal
}

const handleClick = (value: string) => {
  order.value = value
  isActive.value = false;
}

const sortType = ref<string[]>([
  'price.increase',
  'price.lower',
  'area.increase',
  'area.lower',
])

</script>
