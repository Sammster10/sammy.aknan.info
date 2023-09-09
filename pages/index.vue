<script setup lang="ts">

useHeadSafe({
  title: "Sammy | Home",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's portfolio.",
    },
  ],
})

</script>

<template>
  <ul>
    <li id="portfolio">
      <LazyPortfolio/>
    </li>
    <li id="roadmap">
      <LazyRoadmap/>
    </li>
    <li id="about">
      <LazyAbout/>
    </li>
    <li id="services">
      <LazyServices/>
    </li>
    <li id="contact">
      <LazyContact/>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  padding-block: 5rem;
}

</style>