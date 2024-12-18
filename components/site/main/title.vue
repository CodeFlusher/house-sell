
<template>
  <img class="min-h-[55%] max-h-[50%] w-screen object-cover flex z-10 text-center text-2xl text-black dark:text-white" :src="imageURL" :alt="$t('ui.site.image404')"/>
</template>

<script setup lang="ts">

const imageURL = ref<string>('https://media.discordapp.net/attachments/638787427728621578/1317190295053402112/hero-image.jpg?ex=675dc88e&is=675c770e&hm=f8a77ef976181a2a45c10b02badc95c6640bc154b35e2703e0392ea8fc449ec2&=&format=webp&width=550&height=309')

</script>
