<script setup lang="ts">

</script>

<template>
  <div class="relative">
    <div class="interactive-portfolio">
      <div class="items">
        <slot />

      </div>
    </div>
  </div>
</template>

<style scoped>
.interactive-portfolio {
  background-color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  overflow-y: auto;
}

@media screen and (max-width: 768px) {
  .interactive-portfolio {
    position: relative;
    height: 30rem;
  }

  :deep(p) {
    font-size: 0.7rem;
  }

  :deep(h3) {
    font-size: 1rem;
  }
}

@media screen and (min-width: 768px) {
  .interactive-portfolio {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

}

.items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

:deep(.item) {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background-color: #f2f2f2;
  height: 9rem;
}

:deep(.description) {
  text-align: center;
  width: 100%;
}

:deep(h3) {
  margin: 0.5rem 0 0;
}

:deep(p) {
  margin: 0;
  padding-inline: 0.5rem;
}

:deep(hr) {
  width: 50%;
  margin: 0.5rem auto;
  border: 0.07rem solid black;
}

:deep(img) {
  width: 8rem;
  height: 8rem;
  border-radius: 0.5rem;
  object-fit: cover;

  margin: 0.5rem 0.5rem 0.5rem 0;
}

</style>