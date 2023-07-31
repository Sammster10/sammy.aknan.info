<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: "DATE",
  },
})
</script>

<template>
  <div class="card">
    <div class="date">
      Year: {{date}}
    </div>
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>

.date {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background-color: #727272;
  border-radius: 0 0 0 0.75rem;
}

.card {
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
}
</style>