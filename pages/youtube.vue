<script setup lang="ts">
useHeadSafe({
  title: "Sammy | YouTube",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's YouTube account.",
    },
  ],
})
import config from "assets/config/config.json";

const router = useRouter()

onBeforeMount(() => {
  window.open(config.socials.youtube, "_blank")
  router.push("/")
})

</script>

<template>

</template>

<style scoped>

</style>