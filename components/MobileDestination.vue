<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: "DATE",
  },
})
</script>

<template>
  <div class="relative">
    <div class="border"/>
    <div class="date">
      {{ date }}
    </div>
  </div>
  <div class="destination">
    <div class="fade-in-on-screen">
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
  padding-left: 6rem;
  padding-right: 1rem;
}

.border {
  content: "";
  position: absolute;
  width: 5rem;
  height: 10rem;
  left: 1rem;

  border-color: var(--line-color);
  border-radius: 0 0 0 2rem;
  border-width: 0 0 0.5rem 0.5rem;
  border-style: solid;
  z-index: -1;
}

.date {
  position: absolute;
  top: 8.5rem;
  left: 2rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.1rem;
  color: var(--line-color);
}

</style>