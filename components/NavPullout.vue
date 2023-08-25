<script setup lang="ts">

import {updateActiveLink} from "~/util/utils";
import ThreeLinesSVG from "~/components/ThreeLinesSVG.vue";

const navTitle = ref("More Information");


function togglePullout() {
  const pullout = document.getElementById("nav-pullout") as HTMLElement;
  if (pullout.classList.contains("open")) {
    pullout.classList.remove("open");
    navTitle.value = "More Information";
  } else {
    pullout.classList.add("open");
    navTitle.value = "Less Information";
  }
}

let oldActiveLink = "";

const router = useRouter();

onMounted(() => {
  oldActiveLink = updateActiveLink("nav-pullout", router.currentRoute.value.path, oldActiveLink);
  watch(() => router.currentRoute.value.path, () => {
    oldActiveLink = updateActiveLink("nav-pullout", router.currentRoute.value.path, oldActiveLink);
  })
})

</script>

<template>
  <div class="mobile-only no-select">
    <div id="nav-pullout">
      <NavLinks/>
      <div class="bottom" @click="togglePullout">
        <p>{{ navTitle }}</p>
        <ThreeLinesSVG class="open-pullout-icon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

p, a {
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
}

#nav-pullout {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: max-content;
  background-color: rgba(0, 0, 0, 0.25);
  transform: translateY(calc(-100% + 4rem));
  transition: transform 0.3s ease-in-out;
  z-index: 5;
}

#nav-pullout.open {
  transform: translateY(0);
}

#nav-pullout.open .open-pullout-icon {
  transform: rotate(-180deg);
}

:deep(.link) {
  font-size: 1.25rem;
  margin-block: 1rem;
  margin-inline: 2rem;
}


.open-pullout-icon {
  cursor: pointer;
  width: 3rem;
  transition: transform 0.2s ease;
}

.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-inline: 0 !important;
  margin-block: 0 !important;
  padding-block: 0.5rem;
  padding-inline: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.bottom p {
  color: #ffffff;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  font-weight: 500;
}

:deep(.link) {
  width: max-content;
  height: 1.5rem;
}
</style>