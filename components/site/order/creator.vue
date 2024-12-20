<template>

  <div class="w-fit grid grid-cols-2 mx-auto gap-4">
    <KitTransparentCard class="p-4 w-96">
      <h1 class="text-style-title text-2xl">
        {{$t('ui.pages.orders.title')}}
      </h1>
      <span class="text-style-normal text-xl">
        {{$t('ui.pages.orders.description')}}
      </span>
      <KitInputType :label="$t('ui.pages.order.area')" class="mt-4" :min="10" :max="300" >m²</KitInputType>
      <div>

        <KitChooseboxButton :title="$t('ui.pages.order.building_type')">
          <template v-slot:button>
            <span class="text-style-normal text-xl">text</span>
          </template>
          <template v-slot:items>
            <KitChooseboxItems slot="items" >
              <span class="text-style-normal text-xl">123</span>
              <span class="text-style-normal text-xl">123</span>
              <span class="text-style-normal text-xl">123</span>
              <span class="text-style-normal text-xl">123</span>
            </KitChooseboxItems>
          </template>
        </KitChooseboxButton>
      </div>
      <KitSlider :label="$t('ui.pages.order.area')" class="mt-4" :min="10" :max="300" />

    </KitTransparentCard>

    <img src="">
  </div>

</template>

<script setup lang="ts">



</script>