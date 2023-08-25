<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Instagram",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's Instagram profile.",
    },
  ],
})
import config from "assets/config/config.json";

const router = useRouter()

onBeforeMount(() => {
  window.open(config.socials.instagram, "_blank")
  router.push("/")
})

</script>

<template>

</template>

<style scoped>

</style>