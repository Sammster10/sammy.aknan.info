<script setup lang="ts">

import {updateActiveLink} from "~/util/utils";

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
      <div id="links">
        <router-link to="/portfolio" class="no-decoration">
          <div id="portfolio-link">
            Portfolio
            <hr>
          </div>
        </router-link>
        <router-link to="/" class="no-decoration">
          <div id="home-link">
            Home
            <hr>
          </div>
        </router-link>
        <router-link to="/about" class="no-decoration">
          <div id="about-link">
            About
            <hr>
          </div>
        </router-link>
        <router-link to="/services" class="no-decoration">
          <div id="services-link">
            Services
            <hr>
          </div>
        </router-link>
        <router-link to="/contact" class="no-decoration">
          <div id="contact-link">
            Contact
            <hr>
          </div>
        </router-link>
      </div>
      <div class="bottom" @click="togglePullout">
        <p>{{navTitle}}</p>
        <svg id="open-pullout-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M6 12H18M3 6H21M9 18H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </g>
        </svg>
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

#open-pullout-icon {
  cursor: pointer;
  width: 3rem;
  transition: transform 0.2s ease;
}

#nav-pullout.open {
  transform: translateY(0);
}

#nav-pullout.open #open-pullout-icon {
  transform: rotate(-180deg);
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

#nav-pullout div {
  font-size: 1.25rem;
  margin-block: 1rem;
  margin-inline: 2rem;
}

.active hr {
  width: 70% !important;
  border-width: 0.04rem !important;
}

hr {
  margin-top: 0;
  border: 0 solid white;
  width: 0;
  margin-left: 0;
  margin-right: auto;
  transition: width 0.5s ease, border-width 0.5s ease;
}

#links div {
  width: max-content;
  height: 1.5rem;
}
</style>