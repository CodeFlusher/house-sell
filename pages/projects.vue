<template>
    <div class="px-2 flex flex-col">
      <h1 class="mx-auto mt-12 text-4xl text-style-title font-extrabold"> {{$t('ui.pages.projects.title')}}</h1>
      <h2 class="mx-auto text-2xl text-style-normal text-center"> {{$t('ui.pages.projects.description')}}</h2>
    </div>
    <div class="xl:flex max-xl:w-full px-2 mx-auto xl:my-auto xl:w-[70vw] gap-2">
      <SiteProjectsFilter
          v-model:build="filterBuild"
          v-model:plan="filterPlan"
          v-model:design="filterDesign"
          v-model:renew="filterRenew"
          v-model:min="filterMinArea"
          v-model:max="filterMaxArea"
          v-model:strict="filterStrict"
                          class="max-xl:overflow-scroll max-h-[90vh] max-xl:z-50 xl:h-fit max-xl:opacity-0 max-xl:mt-16 max-xl:fixed max-xl:left-1/2 max-xl:bottom-0 max-xl:-translate-x-1/2 transition-opacity duration-200 max-lg:pointer-events-none" :class="{'max-xl:opacity-100 max-xl:pointer-events-auto': visibleFilter}"
          @toggleFilter="visibleFilter = !visibleFilter"
          />
      <div class="h-full xl:w-[70%]">
        <SiteProjectsSearch class="w-full"
          v-model:input="searchString"
          v-model:order="searchOrder" @toggleFilter="visibleFilter = !visibleFilter"
        />
        <SiteCardProject v-for="item in filteredData"
                         :img="item.img"
                         :description="item.description"
                         :name="item.name" :area="item.area"
                         :build-state="item.buildState"
                         :building-type="item.buildingType"
                         :design-state="item.designState"
                         :id="item.id"
                         :plan-state="item.planState"
                         :price="item.price"
                         :renew-state="item.renewState"> </SiteCardProject>
      </div>
    </div>

</template>

<script setup lang="ts">

import type {ProjectProductCard} from "~/types/dynamic.front";

const visibleFilter = ref<boolean>(false);

const filterPlan = ref<boolean>(false);
const filterDesign = ref<boolean>(false);
const filterBuild = ref<boolean>(false);
const filterRenew = ref<boolean>(false);
const filterStrict = ref<boolean>(false);

const filterMinArea = ref<number>(0);
const filterMaxArea = ref<number>(100);

const searchString = ref<string>('');
const searchOrder = ref<string>('');

const preFilter = ref<ProjectProductCard[]>([{
  id: 0,
  img: "https://media.discordapp.net/attachments/638787427728621578/1317182189950996490/photo_2024-12-13_20-31-29.jpg?ex=676c4182&is=676af002&hm=bafb1b0158bf13f462b64dff7018b7b6ed01cc47473ec50c71466c7366ebd551&=&format=webp&width=302&height=671",
  name: "Personal house in Vologda Region",
  description: "Simple small household",
  planState: true,
  designState: true,
  buildState: true,
  renewState: true,
  area: 90,
  buildingType: 'house',
  price: 450000
}])


const filteredData = computed(()=>{
  let finalizedData: ProjectProductCard[] = []

  preFilter.value.forEach((item) => {
    if (item.area < filterMinArea.value){
      return;
    }
    if (item.area > filterMaxArea.value){
      return;
    }

    if (filterStrict.value){
      if (item.planState != filterPlan.value){
        return;
      }
      if (item.designState != filterDesign.value){
        return;
      }
      if (item.buildState != filterBuild.value){
        return;
      }
      if (item.renewState != filterRenew.value){
        return;
      }
    }
    else{
      if(filterPlan.value &&  item.planState != filterPlan.value){
        return;
      }
      if(filterDesign.value &&  item.designState != filterDesign.value){
        return;
      }
      if(filterBuild.value &&  item.buildState != filterBuild.value){
        return;
      }
      if(filterRenew.value &&  item.renewState != filterRenew.value){
        return;
      }
    }

    finalizedData.push(item);
  });

  return finalizedData;
})

</script>
