<script setup lang="ts">
useHeadSafe({
  title: "Sammy | About",
  meta: [
    {
      name: "description",
      content: "Information about Sammy Aknan.",
    },
  ],
})

const router = useRouter();

onBeforeMount(() => {
  router.push("/#about")
})
</script>

<template>

</template>

<style scoped>

</style>