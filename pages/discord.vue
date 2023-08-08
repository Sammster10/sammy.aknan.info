<script setup lang="ts">
import config from "assets/config/config.json";

const router = useRouter()

onBeforeMount(() => {
  window.open(config.socials.discord, "_blank")
  router.push("/")
})

</script>

<template>

</template>

<style scoped>

</style>