<template>

  <div>
    <div @click="toggle">
      <slot name="button" :state="item"/>
    </div>
    <div class="absolute w-full transition-all -translate-x-4 px-4 duration-200 z-20 pointer-events-none opacity-0" :class="{'mt-2 opacity-100 pointer-events-auto' : isActive}">
      <slot name="items" :state="item"/>
    </div>
  </div>

</template>

<script setup lang="ts">

const isActive = ref<boolean>(false);

const item = ref(null);

const toggle = ()=>{
  console.log(isActive.value)
  isActive.value = !isActive.value;
}


</script>
