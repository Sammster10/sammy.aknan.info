<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Portfolio",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's portfolio.",
    },
  ],
})

const router = useRouter();

onBeforeMount(() => {
  router.push("/#portfolio")
})
</script>

<template>

</template>

<style scoped>

</style>