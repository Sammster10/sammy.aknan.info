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
  box-shadow: 0 0 0.5rem 0 var(--theme-inverse-50);
  margin: 2rem;
  padding: 0.5rem;

  min-height: inherit;
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