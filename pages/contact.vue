<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Contact",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's contact information."
    },
  ],
})

const router = useRouter();

onBeforeMount(() => {
  router.push("/#contact")
})
</script>

<template>

</template>

<style scoped>

</style>