<script setup lang="ts">
useHeadSafe({
  title: "Sammy | GitHub",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's GitHub profile.",
    },
  ],
})
import config from "assets/config/config.json";

const router = useRouter()

onBeforeMount(() => {
  window.open(config.socials.github, "_blank")
  router.push("/")
})

</script>

<template>

</template>

<style scoped>

</style>