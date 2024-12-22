<template>

  <MousePointerFollower/>


  <form class="m-auto w-96 flex flex-col gap-4 z-0 p-2">
    <KitButtonBack @click="goBack"/>
    <div class="w-full">
      <h1 class="text-center text-style-title font-extrabold text-3xl">
        {{$t('ui.auth.register.title')}}
      </h1>
    </div>
    <KitInputEmail :email="email" class="z-30"> </KitInputEmail>
    <KitInputPassword class="z-20" :show-context="true" :compare-mode="false" :password="password" :enabled="true" @update="updatePassword"></KitInputPassword>
    <KitInputPassword class="z-10" :show-context="true" :compare-mode="true" :password="repeatPassword" :compare-to="password" :enabled="true" @update="updateRepeatedPassword"></KitInputPassword>
    <KitCheckboxController v-model:active="remember">
      <span class="text-style-normal text-xl" @click="remember = !remember">
        {{$t('ui.auth.register.consent')}}
      </span>
    </KitCheckboxController>
    <KitButtonText> {{$t('ui.auth.register.register')}}</KitButtonText>
    <div class="flex gap-2 justify-between">
      <span class="text-style-title text-xl"> {{$t('ui.auth.register.login')}}</span>
      <NuxtLinkLocale to="/auth/login">
        <NavigationTab class="bg-clip-text text-transparent bg-gradient-to-l text-xl from-green-500 to-green-400 hover:from-cyan-500 hover:to-cyan-400 transition-all duration-200">{{$t('ui.auth.register.redirect')}}</NavigationTab>
      </NuxtLinkLocale>
    </div>
  </form>

</template>

<script setup lang="ts">

import MousePointerFollower from "~/components/background/mousePointerFollower.vue";

const email = ref<string>('')
const password = ref<string>('')
const repeatPassword = ref<string>('')
const remember = ref<boolean>(true)

const updatePassword = (value: string)=>{
  password.value = value
}
const updateRepeatedPassword = (value: string)=>{
  repeatPassword.value = value
}

const router = useRouter()

const goBack = ()=>{
  router.back()
}

definePageMeta({
  layout: 'no-header',
})

</script>