<template>

  <div class="w-fit grid grid-cols-2 m-auto gap-4">
    <KitTransparentCard class="p-4 w-96">
      <h1 class="text-style-title text-2xl">
        {{$t('ui.pages.order.title')}}
      </h1>
      <span class="text-style-normal text-xl">
        {{$t('ui.pages.order.description')}}
      </span>
      <KitInputType :label="$t('ui.pages.order.area')" class="mt-4" :min="10" :max="300" >m²</KitInputType>
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

      <KitInputType :label="$t('ui.pages.order.area')" class="mt-4" :min="10" :max="300" >m²</KitInputType>
    </KitTransparentCard>

    <img src="">
  </div>

</template>

<script setup lang="ts">

const active = ref<boolean>(false);

const items = ref<Array<string>>([
    'apartment',
    'house',
    'penthouse',
    'commercial'
]);

const item = ref<string>('');

const changeItem = (i: string)=>{
  item.value = i;
  active.value = false;
}


</script>