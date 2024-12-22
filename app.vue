<template>
 <NuxtLayout>
   <NuxtPage/>
 </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Project Household` : 'Project Household';
  }
})


</script>