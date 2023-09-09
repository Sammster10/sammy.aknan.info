<script setup lang="ts">

import {scrollToElement} from "~/util/utils";

const router = useRouter();

function changeLink(id: string) {
  if (id === "") {
    router.push("");
    window.scrollTo(0, 0);
  } else {
    router.push(`#${id}`);
    scrollToElement(id);
  }

}
</script>

<template>
  <div class="links">
    <div class="pointer no-select" @click="changeLink('portfolio')">
      <div id="portfolio-link" class="link hover-scale">
        Portfolio
        <hr>
      </div>
    </div>
    <div class="links-right">
      <div class="pointer no-select" @click="changeLink('')">
        <div id="home-link" class="link hover-scale">
          Home
          <hr>
        </div>
      </div>
      <div class="pointer no-select" @click="changeLink('about')">
        <div id="about-link" class="link hover-scale">
          About
          <hr>
        </div>
      </div>
      <div class="pointer no-select" @click="changeLink('services')">
        <div id="services-link" class="link hover-scale">
          Services
          <hr>
        </div>
      </div>
      <div class="pointer no-select" @click="changeLink('contact')">
        <div id="contact-link" class="link hover-scale">
          Contact
          <hr>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

.links {
  color: white;
}

a {
  color: white;
}

hr {
  margin-top: 0;
  border: 0 solid white;
  width: 0;
  margin-left: 0;
  margin-right: auto;
  transition: width 0.5s ease, border-width 0.5s ease;
}


.active hr {
  width: 70% !important;
  border-width: 0.04rem !important;
}
</style>