<template>
  <div class="w-full aspect-video">

    <div class="">
      <img :src="image" alt="alt" class="w-full aspect-[2/1] md:aspect-[3/1] object-cover">
    </div>
  </div>
</template>

<script setup lang="ts">

const image = ref<String>('https://media.discordapp.net/attachments/638787427728621578/1317190295053402112/hero-image.jpg?ex=675dc88e&is=675c770e&hm=f8a77ef976181a2a45c10b02badc95c6640bc154b35e2703e0392ea8fc449ec2&=&format=webp&width=550&height=309');

</script>