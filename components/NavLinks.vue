<script setup lang="ts">

</script>

<template>
  <div class="links">
    <router-link to="/#portfolio" class="no-decoration">
      <div id="portfolio-link" class="link hover-scale">
        Portfolio
        <hr>
      </div>
    </router-link>
    <div class="links-right">
      <router-link to="/" class="no-decoration">
        <div id="home-link" class="link hover-scale">
          Home
          <hr>
        </div>
      </router-link>
      <router-link to="/#about" class="no-decoration">
        <div id="about-link" class="link hover-scale">
          About
          <hr>
        </div>
      </router-link>
      <router-link to="/#services" class="no-decoration">
        <div id="services-link" class="link hover-scale">
          Services
          <hr>
        </div>
      </router-link>
      <router-link to="/#contact" class="no-decoration">
        <div id="contact-link" class="link hover-scale">
          Contact
          <hr>
        </div>
      </router-link>

    </div>
  </div>
</template>

<style scoped>

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