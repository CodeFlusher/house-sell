<template>
  <KitCardClickable>
    <input class="p-2 w-full text-xl outline-none bg-transparent text-style-normal" :class="{'shadow-none border-none' : !enabled}" :placeholder="placeholder" v-model="inputData" :disabled="!enabled" :type="type" >
  </KitCardClickable>
</template>

<script setup lang="ts">

const props = defineProps({
  type:String,
  placeholder:String,
  enabled:Boolean,
})

const inputData = defineModel<String>('input')

</script>