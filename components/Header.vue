<script setup lang="ts">
import config from "assets/config/config.json";

const subtitles = config.subtitles;

const subtitle = ref(subtitles[0]);

let index = 0;
let char = subtitles[0].length;
const pauseInterval = 40;
let pause = pauseInterval;

let forward = true;

function moveForward(string: string) {
  if (char < string.length) {
    subtitle.value = string.substring(0, char + 1);
    if (subtitle.value.endsWith(" ") && char < string.length - 1) {
      char++;
      subtitle.value = string.substring(0, char + 1);
    }
    char++;
    pause = 1; // pause for 1 frame when going forward - this makes going forward 2x as fast
  } else {
    forward = false;
    pause = pauseInterval;
  }
}

function moveBackward(string: string) {
  if (char > 0) {
    subtitle.value = string.substring(0, char - 1);
    if (subtitle.value.endsWith(" ") && char > 1) {
      char--;
      subtitle.value = string.substring(0, char - 1);
    }
    char--;
  } else {
    forward = true;
    index++;
    pause = pauseInterval;
  }
}

function nextChar() {
  if (pause > 0) {
    pause--;
    return;
  }

  let string = subtitles[index];
  if (forward) {
    moveForward(string);
  } else {
    moveBackward(string);
  }

  if (index >= subtitles.length) {
    index = 0;
  }
}


let oldActiveLink = "";

function updateActiveLink(path: string) {
  document.getElementById(oldActiveLink)?.classList.remove("active");
  let activeLink = "";

  if (path === "/" || path === "") {
    activeLink = "home-link";
  } else if (path.startsWith("/about")) {
    activeLink = "about-link";
  } else if (path.startsWith("/services")) {
    activeLink = "services-link";
  } else if (path.startsWith("/contact")) {
    activeLink = "contact-link";
  } else if (path.startsWith("/portfolio")) {
    activeLink = "portfolio-link";
  }

  document.getElementById(activeLink)?.classList.add("active");

  oldActiveLink = activeLink;
}

const router = useRouter();

onMounted(() => {
  setInterval(() => {
    nextChar();
  }, 50);

  updateActiveLink(router.currentRoute.value.path);
  watch(() => router.currentRoute.value.path, (newPath) => {
    updateActiveLink(newPath);
  })
})


</script>

<template>
  <div class="relative" id="header">
      <div id="nav-background" />
      <div id="background" class="fast-scroll" />
      <nav id="links" class="row center white fade-in" data-fade-after="0.4">
        <router-link to="/portfolio" class="no-decoration">
          <div id="portfolio-link" class="hover-scale">
            Portfolio
            <hr>
          </div>
        </router-link>
        <div class="row" id="links-right">
          <router-link to="/" class="no-decoration">
            <div id="home-link" class="hover-scale">
              Home
              <hr>
            </div>
          </router-link>
          <router-link to="/about" class="no-decoration">
            <div id="about-link" class="hover-scale">
              About
              <hr>
            </div>
          </router-link>
          <router-link to="/services" class="no-decoration">
            <div id="services-link" class="hover-scale">
              Services
              <hr>
            </div>
          </router-link>
          <router-link to="/contact" class="no-decoration">
            <div id="contact-link" class="hover-scale">
              Contact
              <hr>
            </div>
          </router-link>
        </div>
      </nav>

    <div id="profile" class="white letter-spacing-negative-05 txt-center">
      <div id="profile-pic" class="hover-scale fade-in" data-fade-after="0.8">
        <img src="/image/profile.jpg" alt="profile image"/>
      </div>
      <div class="fade-in" data-fade-after="1.4">
        <p class="font-size-3 font-weight-700 width-max block-margin-0 inline-margin-auto hover-scale">Sammy<span
            class="font-size-1-5">&nbsp;</span>Aknan</p>
        <div class="row font-size-1-5 font-weight-200 width-max block-margin-0 inline-margin-auto hover-scale">
          <p class="margin-0">{{ subtitle }}</p>
          <div class="cursor-blink"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

p, a {
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
}

#header {
  min-height: 100vh;
}

#background {
  position: absolute;
  background-image: url("/image/header-background.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 2;
}

#background::before {
  content: "";
  position: absolute;
  background-color: rgba(100, 100, 100, 0.1);
  height: 100%;
  width: 100%;
}

nav {
  height: 1.75rem;
  padding-inline: 15rem;
  position: fixed;
  width: calc(100% - 30rem);
  z-index: 4;
}

#nav-background {
  background-color: rgba(0, 0, 0, 0.5);
  content: "";
  height: 1.75rem;
  position: fixed;
  width: 100%;
  z-index: 1;
}

#links {
  height: 2rem;
}

#links div {
  height: 100%;
}

#links hr {
  margin-top: 0;
  border: 0 solid white;
  width: 0;
  margin-right: 0;
  transition: width 0.5s ease, border-width 0.5s ease;
}

#profile {
  position: relative;
  padding-block: 10rem;
  z-index: 3;
}

#profile-pic {
  border-radius: 50%;
  border: 0.2rem solid white;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  margin: 0 auto;
  width: max-content;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

#profile-pic img {
  width: 10rem;
}

#portfolio-link hr {
  margin-left: 0;
  margin-right: auto;
}

.active hr {
  width: 70% !important;
  border-width: 0.04rem !important;
}

#links-right {
  justify-content: space-between;
  margin-left: auto;
  gap: 3rem;
}

.cursor-blink {
  animation: blink 1s step-start infinite;
  background-color: white;
  display: inline-block;
  width: 0.1rem;
  margin-left: 0.2rem;
  margin-block: 0.3em;
  height: 1.2em;
  opacity: 1;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}


</style>