<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>

.card {
  background-color: var(--page-bg);
  width: max-content;
  box-shadow: 0.25rem 0.25rem 0.25rem 0 var(--theme-inverse-50);
  padding: 1rem;
  margin-block: 0.5rem;
  transition: box-shadow 0.3s ease;
}
</style>