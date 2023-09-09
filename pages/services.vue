<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Services",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's services.",
    },
  ],
})

const router = useRouter();

onBeforeMount(() => {
  router.push("/#services")
})
</script>

<template>

</template>

<style scoped>

</style>