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
    <KitInputPassword :show-context="false" :compare-mode="false" :password="password" :enabled="true"></KitInputPassword>
    <KitCheckboxController v-model:active="remember">
      <span class="text-style-normal text-xl" @click="remember = !remember">
        {{$t('ui.auth.login.remember')}}
      </span>
    </KitCheckboxController>
    <KitButtonText> {{$t('ui.auth.login.login')}}</KitButtonText>
    <div class="flex gap-2 justify-between">
      <span class="text-style-title text-xl"> {{$t('ui.auth.login.no_account')}}</span>
      <NuxtLinkLocale to="/auth/register">
        <NavigationTab class="bg-clip-text text-transparent bg-gradient-to-l text-xl from-green-500 to-green-400 hover:from-cyan-500 hover:to-cyan-400 transition-all duration-200">{{$t('ui.auth.login.register')}}</NavigationTab>
      </NuxtLinkLocale>
    </div>
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