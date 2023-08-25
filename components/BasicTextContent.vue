<script setup lang="ts">

</script>

<template>
  <div class="width-clamp inline-margin-auto">
    <div class="text-container">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.text-container {
  background-color: var(--page-bg);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  margin: 2rem;
  padding: 0.5rem;
  min-height: calc(100vh - 4rem);
}

:deep(section) {
  text-align: center;
  padding-inline: 6rem;
}

@media screen and (max-width: 768px) {
  :deep(section) {
    padding-inline: 2rem;
  }
}

:deep(section:not(:last-child)) {
  margin-bottom: 5rem;
}

:deep(hr) {
  margin-block: 1rem;
  margin-inline: auto;
  border: none;
  border-bottom: 0.2rem solid var(--theme-inverse);
  width: min(25rem, 50%);
}
</style>