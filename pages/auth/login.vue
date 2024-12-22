<template>

  <MousePointerFollower/>


  <form class="m-auto w-96 flex flex-col gap-4 z-0 p-2">
    <KitButtonBack @click="goBack"/>
    <div class="w-full">
      <h1 class="text-center text-style-title font-extrabold text-3xl">
        {{$t('ui.auth.login.title')}}
      </h1>
    </div>
    <KitInputEmail :email="email" class="z-10"> </KitInputEmail>
    <KitInputPassword :password="password" :enabled="true"></KitInputPassword>
    <KitCheckboxController v-model:active="remember">
      <span class="text-style-normal text-xl" @click="remember = !remember">
        {{$t('ui.auth.login.remember')}}
      </span>
    </KitCheckboxController>
    <KitButtonText> {{$t('ui.auth.login.login')}}</KitButtonText>
  </form>

</template>

<script setup lang="ts">

  import MousePointerFollower from "~/components/background/mousePointerFollower.vue";

  const email = ref<string>('')
  const password = ref<string>('')
  const remember = ref<boolean>(true)

  const router = useRouter()

  const goBack = ()=>{
    router.back()
  }

  definePageMeta({
    layout: 'no-header',
  })

</script>