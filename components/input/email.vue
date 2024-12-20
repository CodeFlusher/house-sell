<template>
  <div class="w-full">
    <label class="text-style-title text-xl" for="input_field">{{$t('ui.input.email.title')}}</label>
    <input id="input_field" class="w-full p-2 border text-xl transition-colors duration-200 focus:border-orange-300 outline-none rounded-xl bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 shadow-md shadow-orange-100 dark:shadow-neutral-950 text-style-normal" :class="{'border border-red-500 focus:border-red-500 dark:border-red-500  bg-red-500 dark:bg-red-500 bg-opacity-15 dark:bg-opacity-15' : isContextShown}" :placeholder="$t('ui.input.email.placeholder')" v-model="email" :disabled="false" type="text">

    <HoverCard class="w-fit absolute opacity-0 scale-y-0 h-fit text-style-title transition-all duration-400 ease-in-out text-xl" :class="{'translate-y-2 scale-y-100 opacity-100': isContextShown}" :overrideclass="overrideClass" >
      {{ $t('ui.input.email.wrong') }}
    </HoverCard>
  </div>
</template>

<script setup lang="ts">

const email = defineModel<string>('email')

if(!email.value) {
  email.value = ''
}

const isContextShown = computed(()=>{
  if(email.value){
    return email.value.length > 0 && email.value.indexOf('@') == -1
  }else{
    return false
  }
})

const overrideClass = computed(()=>{
  const common = "bg-red-500 border-red-500 dark:border-red-500 bg-opacity-15"
  if(isContextShown.value){
    return common + " " + "p-2"
  }
  else{
    return common + " " + "px-2"
  }
})


</script>