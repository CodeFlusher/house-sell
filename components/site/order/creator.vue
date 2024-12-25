<template>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 md:px-12">
    <BackgroundMousePointerFollower/>
    <div class="p-4 backdrop-blur-0 lg:w-[40vw]">
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

      <SiteToolsBuildTypeChooser v-model:item="buildType"/>

      <h1 class="text-style-title text-xl mt-2">
        {{$t('ui.pages.order.phases')}}
      </h1>
      <ul>
          <KitCheckboxController  class="mt-2" v-model:active="item.use"  v-for="item in phases">
            <span class="text-style-normal text-xl">{{$t('ui.pages.order.phase.' + item.id)}}</span>
          </KitCheckboxController>
      </ul>

      <h3 class="text-style-normal text-xl mt-4">
        {{$t('ui.pages.order.approximate.note')}}
      </h3>
      <h2 class="text-style-title text-4xl max-md:text-center"> {{$t('ui.pages.order.approximate')}}: <span class=" text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400"> {{ `\$${approximateValue} ` }}</span></h2>
    </div>

    <div class="h-full w-full max-lg:hidden flex">
      <img class="h-full w-full object-cover z-10 m-auto rounded-xl" :src="image" alt="cards">
    </div>

  </div>

</template>

<script setup lang="ts">

import type {OrderPhase} from "~/types/dynamic.front";

const planLandValue = ref<number>(20);
const designLandValue = ref<number>(46);
const landValue = ref<number>(3873);
const renovationLandValue = ref<number>(500);
const landmass = ref<number>();

const buildType = ref<string>('');

const lastResult = ref<string>('/images/order/apartment/large.png');

const imageParent = '/images/order/'

const image = computed(()=>{
  console.log('update')
  if (!landmass.value) {
    return lastResult.value;
  }
  if (!buildType.value) {
    return lastResult.value;
  }
  let temp = imageParent + buildType.value;
  if (landmass.value < 60) {
    lastResult.value = temp + '/small.png'
    return lastResult.value;
  }
  if (landmass.value > 120) {
    lastResult.value = temp + '/large.png'
    return lastResult.value;
  }
  lastResult.value = temp + '/medium.png'
  return lastResult.value;

})

const approximateValue = computed(()=>{
  if(!landmass.value){
    return 0;
  }
  return (phases.value[0].use ? 1 : 0) * (planLandValue.value * landmass.value)
      + (phases.value[1].use ? 1 : 0) * (designLandValue.value * landmass.value)
      + (phases.value[2].use ? 1 : 0) * (landValue.value * landmass.value)
      + (phases.value[3].use ? 1 : 0) * (renovationLandValue.value * landmass.value);
})

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


</script>