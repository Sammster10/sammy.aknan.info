<script setup lang="ts">

defineProps({
  src: {
    type: String,
    required: true
  }
})

const selectedImage = ref("");

const setSelectedImage = (image: string) => {
  selectedImage.value = image;
};

const clearSelectedImage = () => {
  selectedImage.value = "";
};

const isImageSelected = () => {
  return selectedImage.value !== "";
};

onBeforeMount(() => {
  window.addEventListener("keydown", (e) => {
    if (isImageSelected() && (e.key === "Escape" || e.key === "Space")) {
      clearSelectedImage();
    }
  });
})
</script>

<template>
  <img class="expandable-image" :src="src" @click="setSelectedImage(src)" v-if="!isImageSelected()" alt="" />

  <div class="image-overlay" v-if="isImageSelected()" @click="clearSelectedImage()">
    <div class="image-container">
      <img :src="selectedImage" alt=""/>
    </div>
  </div>
</template>

<style scoped>
.expandable-image:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
}

.image-container {
  width: min(90vw, 90%);
  height: min(90vh, 90%);
}

.image-container > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>