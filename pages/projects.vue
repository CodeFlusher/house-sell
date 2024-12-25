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
  img: "/images/order/house/medium.png",
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

for (let i = 0; i < 20; i++) {
  preFilter.value.push({
    id: i+1,
    img: "/images/order/house/medium.png",
    name: "Personal house in Vologda Region",
    description: "Simple small household",
    planState: Math.random() < 0.5,
    designState: Math.random() < 0.5,
    buildState: Math.random() < 0.5,
    renewState: Math.random() < 0.5,
    area: Math.random()*120 + 40,
    buildingType: 'house',
    price: Math.random() * 300000 + 12000,
  })
}

for (let i = 0; i < 20; i++) {
  preFilter.value.push({
    id: i + 21,
    img: "/images/order/apartment/medium.png",
    name: "Apartments in Moscow",
    description: "A personal apartment in Moscow",
    planState: Math.random() < 0.5,
    designState: Math.random() < 0.5,
    buildState: Math.random() < 0.5,
    renewState: Math.random() < 0.5,
    area: Math.random()*120 + 40,
    buildingType: 'apartment',
    price: Math.random() * 300000 + 12000,
  })
}
for (let i = 0; i < 10; i++) {
  preFilter.value.push({
    id: i+41,
    img: "/images/order/commercial/small.png",
    name: "Commercial Building",
    description: "A personal apartment in Moscow",
    planState: Math.random() < 0.5,
    designState: Math.random() < 0.5,
    buildState: Math.random() < 0.5,
    renewState: Math.random() < 0.5,
    area: Math.random()*120 + 40,
    buildingType: 'commercial',
    price: Math.random() * 300000 + 12000,
  })
}


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
