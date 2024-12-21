<template>

  <div class="w-fit grid grid-cols-1 lg:grid-cols-2 m-auto gap-4 px-2 md:px-12">
    <BackgroundMousePointerFollower/>
    <div class="p-4 backdrop-blur-0">
      <h1 class="text-style-title text-2xl">
        {{$t('ui.pages.order.title')}}
      </h1>
      <span class="text-style-normal text-xl">
        {{$t('ui.pages.order.description')}}
      </span>
      <KitInputType v-model:amount="landmass" :label="$t('ui.pages.order.area')" class="mt-4" :min="10" :max="300" >m²</KitInputType>

      <KitCheckboxController class="mt-2" :active="true">
        <span class="text-style-normal text-xl">{{$t('ui.pages.order.separate')}}</span>
      </KitCheckboxController>

      <KitChooseboxController v-model:active="active" v-model:item="item">
        <template #button>
          <KitChooseboxButton :active="active" :title="$t('ui.pages.order.building_type')">
            <span class="text-style-normal text-xl">
                 {{ item ? $t('ui.pages.order.type.' + item) : $t('ui.choose_box.choose_option') }}
            </span>
          </KitChooseboxButton>
        </template>
        <template #items>
          <KitChooseboxItems>
            <KitChooseboxItem
                v-for="i in items"
                @click="changeItem(i)"
                :key="i"
            >
              <span class="text-style-normal text-xl">{{$t('ui.pages.order.type.' + i)}}</span>
            </KitChooseboxItem>
          </KitChooseboxItems>
        </template>
      </KitChooseboxController>

      <h1 class="text-style-title text-xl mt-2">
        {{$t('ui.pages.order.phases')}}
      </h1>
      <ul>
          <KitCheckboxController  class="mt-2" v-model:active="item.use"  v-for="item in phases">
            <span class="text-style-normal text-xl">{{$t('ui.pages.order.phase.' + item.id)}}</span>
          </KitCheckboxController>
      </ul>
      <h2 class="text-style-title text-4xl mt-2 max-md:text-center"> {{$t('ui.pages.order.approximate')}}: <span class=" text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400"> {{ `\$${approximateValue} ` }}</span></h2>
    </div>


  </div>

</template>

<script setup lang="ts">

import type {OrderPhase} from "~/types/dynamic.front";

const active = ref<boolean>(false);

const planLandValue = ref<number>(20);
const designLandValue = ref<number>(46);
const landValue = ref<number>(3873);
const renovationLandValue = ref<number>(500);
const landmass = ref<number>();

const approximateValue = computed(()=>{
  if(!landmass.value){
    return 0;
  }
  console.log(phases.value)
  return (phases.value[0].use ? 1 : 0) * (planLandValue.value * landmass.value)
      + (phases.value[1].use ? 1 : 0) * (designLandValue.value * landmass.value)
      + (phases.value[2].use ? 1 : 0) * (landValue.value * landmass.value)
      + (phases.value[3].use ? 1 : 0) * (renovationLandValue.value * landmass.value);
})

const items = ref<Array<string>>([
    'apartment',
    'house',
    'penthouse',
    'commercial'
]);

const phases = ref<OrderPhase[]>([
  {
    id: 'plan',
    use: false
  },
  {
    id: 'design',
    use: false
  },
  {
    id: 'build',
    use: false
  },
  {
    id: 'renovation',
    use: false
  },
])

const item = ref<string>('');

const changeItem = (i: string)=>{
  item.value = i;
  active.value = false;
}


</script>