<template>

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
            @click="changeItem('')">
          <span class="text-style-normal text-xl">{{$t('ui.pages.order.type.none')}}</span>
        </KitChooseboxItem>
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

</template>

<script setup lang="ts">

const items = ref<Array<string>>([
  'apartment',
  'house',
  'penthouse',
  'commercial'
]);


const active = ref<boolean>(false);
const item = defineModel<string>('');

const changeItem = (i: string)=>{
  item.value = i;
  active.value = false;
}

</script>