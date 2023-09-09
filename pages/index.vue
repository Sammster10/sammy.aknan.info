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
      <Portfolio/>
    </li>
    <li id="roadmap">
      <Roadmap/>
    </li>
    <li id="about">
      <About/>
    </li>
    <li id="services">
      <Services/>
    </li>
    <li id="contact">
      <Contact/>
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