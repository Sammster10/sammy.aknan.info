<script setup lang="ts">

</script>

<template>
  <div class="width-clamp inline-margin-auto">
    <div class="text-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.text-container {
  background-color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  margin: 2rem;
  padding: 0.5rem;
}
</style>