<script setup lang="ts">
import config from "assets/config/config.json";
import NavPullout from "~/components/NavPullout.vue";
import {updateActiveLink} from "~/util/utils";

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


let oldActiveLink = "home-link";

const router = useRouter();

onMounted(() => {
  setInterval(() => {
    nextChar();
  }, 50);


  oldActiveLink = updateActiveLink("nav-container", router.currentRoute.value.path, oldActiveLink);
  watch(() => router.currentRoute.value.path, (newPath) => {
    oldActiveLink = updateActiveLink("nav-container", router.currentRoute.value.path, oldActiveLink);
  })
})


</script>

<template>
  <div class="header">
    <div class="nav-background desktop-only"/>
    <div class="background fast-scroll"/>
    <NavPullout/>
    <div class="desktop-only">
      <div id="nav-container">
        <nav class="fade-in" data-fade-after="0.4">
          <router-link to="/portfolio" class="no-decoration">
            <div id="portfolio-link" class="hover-scale">
              Portfolio
              <hr>
            </div>
          </router-link>
          <div class="links-right">
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
      </div>
    </div>

    <div class="profile white letter-spacing-negative-05 txt-center width-100">
      <div class="profile-pic hover-scale fade-in" data-fade-after="0.8">
        <img src="/image/profile.jpg" alt="profile image"/>
      </div>
      <div class="fade-in" data-fade-after="1.4">
        <p class="font-size-3 font-weight-700 width-max block-margin-0 inline-margin-auto hover-scale">Sammy<span
            class="font-size-1-5">&nbsp;</span>Aknan</p>
        <div class="subtitles hover-scale">
          <div class="margin-0">{{ subtitle }}<span class="cursor-blink"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

p, a {
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
}

.header {
  position: relative;
  min-height: 100vh;
}

.background {
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

.background::before {
  content: "";
  position: absolute;
  background-color: rgba(100, 100, 100, 0.1);
  height: 100%;
  width: 100%;
}

.subtitles {
  font-size: 1.5rem;
  font-weight: 200;
  margin-block: 0;
  margin-inline: auto;
  max-width: 80%;
  height: 4rem;
}

#nav-container {
  position: fixed;
  padding-top: 0.2rem;
  width: 100%;
  z-index: 4;
}

nav {
  display: flex;
  flex-direction: row;
  margin-inline: auto;
  width: max(30vw, calc(min(100%, var(--max-content-width)) - 40vw));
  z-index: 4;
}

.nav-background {
  background-color: rgba(0, 0, 0, 0.5);
  content: "";
  height: 2rem;
  position: fixed;
  width: 100%;
  z-index: 1;
}

nav div {
  height: 100%;
}

nav hr {
  margin-top: 0;
  border: 0 solid white;
  width: 0;
  margin-right: 0;
  transition: width 0.5s ease, border-width 0.5s ease;
}

.profile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.profile-pic {
  border-radius: 50%;
  border: 0.2rem solid white;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  margin: 0 auto;
  width: max-content;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

.profile-pic img {
  width: 10rem;
}

.portfolio-link hr {
  margin-left: 0;
  margin-right: auto;
}

.active hr {
  width: 70% !important;
  border-width: 0.04rem !important;
}

.links-right {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-left: auto;
}

.cursor-blink {
  animation: blink 1s step-start infinite;
  background-color: white;
  display: inline-block;
  width: 0.1rem;
  margin-left: 0.2rem;
  margin-bottom: 0;
  height: 1em;
  opacity: 1;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}


</style>