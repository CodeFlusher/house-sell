<template>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-4 mt-8 lg:max-w-[50vw]">
    <div class="p-2 my-auto">
      <h2 class="text-style-title text-4xl">{{$t('ui.pages.main.questions.title')}}</h2>
      <span class="text-style-normal text-2xl">{{$t('ui.pages.main.questions.description')}}</span>
    </div>
    <form action="" class="gap-2 grid grid-cols-1 grid-">
      <KitInputEmail/>
      <KitInputTitled :input="name" type="text" :enabled="true" :title="$t('ui.input.name.title')" :placeholder="$t('ui.input.name.placeholder')"></KitInputTitled>
      <KitInputTitled :input="name" type="text" :enabled="true" :title="$t('ui.input.question.title')" :placeholder="$t('ui.input.question.placeholder')"></KitInputTitled>
      <ButtonText :text="$t('ui.pages.main.questions.submit')"></ButtonText>
    </form>

  </div>

</template>

<script setup lang="ts">

const email = ref<String>('')
const name = ref<String>('')

</script>