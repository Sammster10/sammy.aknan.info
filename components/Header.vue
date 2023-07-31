<script setup lang="ts">

import {getElementById} from "domutils";

const subtitles = [
  "Hi, I'm a Software Developer.",
  "I'm proficient in: Java, Python, JS, HTML, CSS & Linux.",
  "I'm a Computer Science Major at Virginia Tech.",
]

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
  } else if (path.startsWith("/portfolio")) {
    activeLink = "portfolio-link";
  }

  document.getElementById(activeLink)?.classList.add("active");

  oldActiveLink = activeLink;

  console.log("active link: " + activeLink);
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
  <div class="relative">
    <div class="fade-in" data-fade-after="0.8">
      <img src="/image/background.jpg" alt="background image"
           class="absolute width-100 height-100 cover overflow-hidden z-index-negative-3">
      <div class="absolute width-100 height-100 bg-black opacity-50 z-index-negative-2"/>
    </div>
    <nav id="links" class="row center white fade-in" data-fade-after="1.2">
      <div id="portfolio-link">
        <router-link to="/portfolio" class="hover-scale no-decoration">Portfolio</router-link>
        <hr>
      </div>
      <div class="row" id="links-right">
        <div id="home-link">
          <router-link to="/" class="hover-scale no-decoration">Home</router-link>
          <hr>
        </div>
        <div id="about-link">
          <router-link to="/about" class="hover-scale no-decoration">About</router-link>
          <hr>
        </div>
        <div id="services-link">
          <router-link to="/services" class="hover-scale no-decoration">Services</router-link>
          <hr>
        </div>
        <div id="contact-link">
          <router-link to="/contact" class="hover-scale no-decoration">Contact</router-link>
          <hr>
        </div>
      </div>
    </nav>

    <div class="white letter-spacing-negative-05 txt-center block-pad-3 fade-in" data-fade-after="1.6">
      <div
          class="border-circle border-white border-1 width-max inline-margin-auto block-margin-1 aspect-ratio-1-1 overflow-hidden hover-scale">
        <img src="/image/profile.jpg" alt="profile image" class="width-size-9"/>
      </div>
      <p class="font-size-3 font-weight-700 width-max block-margin-0 inline-margin-auto hover-scale">Sammy<span
          class="font-size-1-5">&nbsp;</span>Aknan</p>
      <div class="row font-size-1-5 font-weight-200 width-max block-margin-0 inline-margin-auto hover-scale">
        <p class="margin-0">{{ subtitle }}</p>
        <div class="cursor-blink"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

nav {
  height: 50px;
  padding-inline: 15rem;
  padding-top: 0.3rem;
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

#portfolio-link hr {
  margin-left: 0;
  margin-right: auto;
}

.active hr {
  width: 70% !important;
  border-width: 1px !important;
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