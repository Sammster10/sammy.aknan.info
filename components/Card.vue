<script setup lang="ts">
defineProps({
  img: {
    type: String,
    default: "",
  },
  header: {
    type: String,
    default: "HEADER",
  },
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      {{ header }}
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

.card-header {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.05rem;
  margin-left: 10rem;
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
  margin-left: 10rem;
}

.card-body  {
  margin-top: 1rem;
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
  background-image: linear-gradient(to bottom right, #ff8f00 20%, #ff0000);
  box-shadow: 0 0 0.5rem rgba(255, 98, 205, 0.3)
}
</style>