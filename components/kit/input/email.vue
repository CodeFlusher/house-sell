<template>
  <div class="w-full">
    <label class="text-style-title text-xl" for="input_field">{{$t('ui.input.email.title')}}</label>
    <KitCardClickable>
      <input id="input_field" class="p-2 w-full text-xl outline-none bg-transparent text-style-normal border border-transparent transition-all duration-400 rounded-xl" :class="{'border border-red-500 focus:border-red-500 dark:border-red-500  bg-red-500 dark:bg-red-500 bg-opacity-15 dark:bg-opacity-15' : isContextShown}" :placeholder="$t('ui.input.email.placeholder')" v-model="email" :disabled="false" type="text">
    </KitCardClickable>
    <KitTransparentCard class=" w-fit absolute opacity-0 scale-y-0 h-fit text-style-title transition-all duration-400 ease-in-out text-xl" :class="{'translate-y-2 scale-y-100 opacity-100': isContextShown}" :overrideclass="overrideClass" >
      {{ $t('ui.input.email.wrong') }}
    </KitTransparentCard>
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