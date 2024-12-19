<template>
  <InputTitled :enabled="enabled" type="password" :input="password" :title="$t('ui.input.password.title')" :placeholder="$t('ui.input.password.placeholder')" />
</template>

<script setup lang="ts">

const password = defineModel('password')

const props = defineProps({
  enabled: Boolean,
})

</script>