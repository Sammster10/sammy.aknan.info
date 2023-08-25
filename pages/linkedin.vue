<script setup lang="ts">
useHeadSafe({
  title: "Sammy | LinkedIn",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's LinkedIn profile.",
    },
  ],
})
import config from "assets/config/config.json";

const router = useRouter()

onBeforeMount(() => {
  window.open(config.socials.linkedin, "_blank")
  router.push("/")
})

</script>

<template>

</template>

<style scoped>

</style>