<script setup lang="ts">
import {isLightTheme, setTheme} from "~/util/utils";
import SunSVG from "~/components/SunSVG.vue";

function changeTheme() {
  setTheme(isLightTheme() ? "dark" : "light");
  updateTheme();
}

function updateTheme() {
  if (isLightTheme()) {
    document.documentElement.classList.remove("dark-theme");
    document.getElementById("icon-light")?.classList.remove("active");
    document.getElementById("icon-dark")?.classList.add("active");
  } else {
    document.documentElement.classList.add("dark-theme");
    document.getElementById("icon-light")?.classList.add("active");
    document.getElementById("icon-dark")?.classList.remove("active");
  }
}

onMounted(() => {
  updateTheme();
});
</script>

<template>
  <div id="theme-button" class="theme-switch hover-scale" @click="changeTheme()">
    <MoonSVG id="icon-dark" class="active" />
    <SunSVG id="icon-light" class="dark" />
  </div>
</template>

<style scoped>
.theme-switch {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  z-index: 9999;
}

svg {
  opacity: 0;
  position: absolute;
  padding: 0.5rem;
  transition: opacity 0.3s ease;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem 0 var(--theme-inverse);
}

.active {
  opacity: 1;
}

.dark {
  background-color: #424242;
  stroke: white;
}
</style>