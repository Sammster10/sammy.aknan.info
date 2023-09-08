<script setup lang="ts">

useHeadSafe({
  title: "Sammy | Home",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's portfolio website.",
    },
  ],
})

</script>

<template>
  <PortfolioPreview/>
  <div class="spacer" />
  <Roadmap/>
</template>

<style scoped>
.spacer {
  height: 3rem;
}

</style>