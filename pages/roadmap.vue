<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Roadmap",
  meta: [
    {
      name: "description",
      content: "Information about Sammy Aknan's history.",
    },
  ],
})

const router = useRouter();

onBeforeMount(() => {
  router.push("/#roadmap")
})
</script>

<template>

</template>

<style scoped>

</style>