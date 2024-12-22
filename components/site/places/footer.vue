<template>
  <div class="max-md:w-full w-1/2 mt-4 flex flex-col mx-auto">
    <h1 class="text-style-title text-center text-4xl">
      {{$t("ui.pages.places.footer.title")}}
    </h1>
    <h2 class="text-style-normal text-center text-2xl">
      {{$t('ui.pages.places.footer.subtitle')}}
    </h2>

    <div class="px-4 w-full flex">
      <KitButtonText class=" mt-2 w-full">
        {{$t("ui.pages.places.footer.order")}}
      </KitButtonText>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>
