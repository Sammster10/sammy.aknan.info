<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: "DATE",
  },
  img: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div class="card">
    <div class="date">
      Year: {{ date }}
    </div>
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-image">
      <img v-if="img" :src="img" alt="...">
    </div>
  </div>
</template>

<style scoped>

.date {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background-color: black;
  border-radius: 0 0 0 0.75rem;
}

.card {
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  height: 15rem;
}

.card-body {
  font-size: 0.8rem;
  margin-left: 10rem
}

.card-header {
  text-align: right;
}

img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 0.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-image {
  position: absolute;
  left: -1.5rem;
  bottom: 3.5rem;
  background-color: red;
  width: 8rem;
  height: 8rem;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(to bottom right, #46fff7, #c462ff 70%);
  box-shadow: 0 0 0.5rem rgba(196, 98, 255, 0.3)
}
</style>