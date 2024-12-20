<template>
  <div class="flex flex-col">
    <label class="text-style-title text-xl" for="input_field">{{title}}</label>
    <KitInputField  id="input_field" :placeholder="placeholder" :type="type" :enabled="enabled"></KitInputField>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type:String,
  placeholder:String,
  enabled:Boolean,
  title: String
})

const model = defineModel<String>('input')

</script>

