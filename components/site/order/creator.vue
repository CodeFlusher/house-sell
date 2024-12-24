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

      <SiteToolsBuildTypeChooser/>

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

    <div class="h-full max-lg:hidden flex">
      <img class="aspect-square size-96 object-cover z-10 m-auto rounded-xl" src="https://media.discordapp.net/attachments/655398070535585792/1319597608137789450/vD8qhbxkI2tXR5CY3eCng9MLKs08mukGv1-uDZ6nxKa7Q6Tt8jBPnNBYkhiaakugUKFNYN4f6o_KveRdhUeKe672.jpg?ex=67692d8a&is=6767dc0a&hm=46ff6442c42b70f6ad9cb1666dadd5646af7fa805df1da1a3320937dbf147b69&=&format=webp&width=573&height=671" alt="cards">
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