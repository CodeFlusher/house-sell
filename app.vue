<template>
 <NuxtLayout>
   <NuxtPage class="mt-16 min-h-screen"/>
 </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Project Household` : 'Project Household';
  }
})


</script>