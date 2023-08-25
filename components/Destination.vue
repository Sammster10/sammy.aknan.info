<script setup lang="ts">
defineProps({
  date: {
    type: String,
    default: "DATE",
  },
  left: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div :class="left ? 'left' : 'right'">
    <div class="relative">
      <div class="border"/>
      <div class="date">
        {{ date }}
      </div>
    </div>
    <div class="destination">
      <div class="fade-in-on-screen">
        <div class="text-container">
          <slot/>
        </div>
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

.text-container {
  padding-right: 4rem;
  padding-left: 3rem;
}

.border {
  content: "";
  position: absolute;
  width: 5rem;
  height: 10rem;

  border-color: var(--line-color);
  border-style: solid;
  z-index: -1;
}

.date {
  position: absolute;
  top: 8.5rem;
  right: 1rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.1rem;
  color: var(--line-color);
}

.left .text-container {
  padding-right: 4rem;
  padding-left: 3rem;
}

.left .border {
  right: -0.5rem;
  border-radius: 0 0 2.5rem 0;
  border-width: 0 0.5rem 0.5rem 0;
}

.left .date {
  right: 1rem;
}

.right .text-container {
  padding-left: 6rem;
  padding-right: 1rem;
}

.right .border {
  border-radius: 0 0 0 2.5rem;
  border-width: 0 0 0.5rem 0.5rem;
}

.right .date {
  left: 1.5rem;
}

</style>