<template>
  <input class="p-2 border text-xl transition-colors duration-200 focus:border-orange-300 outline-none rounded-xl bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 shadow-orange-100 text-style-normal" :class="{'shadow-none border-none' : !enabled}" :placeholder="placeholder" v-model="inputData" :disabled="!enabled" :type="type" >
</template>

<script setup lang="ts">

const props = defineProps({
  type:String,
  placeholder:String,
  enabled:Boolean,
})

const inputData = defineModel<String>('input')

</script>