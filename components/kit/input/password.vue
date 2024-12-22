<template>

  <div class="w-full backdrop-blur-0">

  <KitInputTitled :enabled="enabled" type="password" :input="password" :title="$t('ui.input.password.title')" :placeholder="$t('ui.input.password.placeholder')" @update="updatePassword">
  </KitInputTitled>

    <div class="p-2 w-full absolute opacity-0 origin-top text-style-title duration-300 ease-in-out text-xl transition-all bg-zinc-200 dark:bg-neutral-800 border rounded-xl broder-zinc-300 dark:border-neutral-700 pointer-events-none" :class="{'translate-y-2 opacity-100 pointer-events-all': isContextVisible}" >
      <span>
        {{$t('ui.input.password.validation.title')}}
      </span>
      <ul class="text-style-normal font-normal ml-2">
        <li class="transition-all bg-neutral-800 dark:bg-neutral-300 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-600" :class="{'text-transparent ': len }">{{$t('ui.input.password.validation.length')}}</li>
        <li class="transition-all bg-neutral-800 dark:bg-neutral-300 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-600" :class="{'text-transparent ': symbols }">{{$t('ui.input.password.validation.symbols')}}</li>
        <li class="transition-all bg-neutral-800 dark:bg-neutral-300 bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-green-600" :class="{'text-transparent ': digits }">{{$t('ui.input.password.validation.digits')}}</li>

      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

import {EyeIcon} from "@heroicons/vue/24/solid";
import {EyeSlashIcon} from "@heroicons/vue/24/solid";

const password = defineModel<string>('password')

const isPasswordVisible = ref<boolean>(false);

const updatePassword = (value:String) => {
  password.value = value
}

const eyeComponent = computed(()=>{
  if(!isPasswordVisible.value){
    return EyeIcon;
  }else{
    return EyeSlashIcon;
  }
})

const type = computed(()=>{
  if(!isPasswordVisible.value){
    return "password";
  }else{
    return "text";
  }
})


const props = defineProps({
  enabled: Boolean,
})


const len= computed(()=>{
    if(!password.value){
      return false
    }
    return password.value.length >= 8;
  })
const symbols = computed(()=>{
    if(!password.value){
      return false
    }
    return /[A-Za-z]/.test(password.value)
  })
const digits = computed(()=>{
    if(!password.value){
      return false
    }
    return /\d/.test(password.value);
})


const isContextVisible = computed(()=>{
  if(password.value){
    return !(digits.value && symbols.value && len.value)
  }else{
    return false
  }

})

const overrideClass = computed(()=>{
  const common = "bg-red-500 border-red-500 dark:border-red-500 bg-opacity-15"
  if(isContextVisible.value){
    return common + " " + "p-2"
  }
  else{
    return common + " " + "px-2"
  }
})

</script>