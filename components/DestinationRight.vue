<script setup lang="ts">

</script>

<template>
  <div class="destination">
    <div class="fade-in-on-screen">
      <div class="relative">
        <div class="border"/>
      </div>
      <div class="container">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destination {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  padding-left: 4rem;
  padding-right: 2rem;
}

.border {
  content: "";
  position: absolute;
  width: 20rem;
  height: 10rem;

  border-color: #727272;
  border-radius: 0 0 0 2.5rem;
  border-width: 0 0 0.4rem 0.4rem;
  border-style: solid;
  z-index: -1;
}

</style>