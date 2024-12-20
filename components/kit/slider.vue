<template>

  <div>
    <label for="input_field" class="text-style-title text-xl"> {{label}} </label>
    <div id="input_field" class="flex w-full gap-2">
      <InputField class="w-14" :enabled='true' type="number" :input="amount" placeholder="0" />
      <URange class="my-auto" v-model="amount" :max="max" :min="min"/>
    </div>


  </div>

</template>

<script setup lang="ts">

const props = defineProps({
  max: Number,
  min: Number,
  label: String,
})

const amount = defineModel<number>('amount')
amount.value = 0

</script>