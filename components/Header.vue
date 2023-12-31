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


  oldActiveLink = updateActiveLink("nav-container", router.currentRoute.value.fullPath, oldActiveLink);
  watch(() => router.currentRoute.value.fullPath, (newPath) => {
    oldActiveLink = updateActiveLink("nav-container", router.currentRoute.value.fullPath, oldActiveLink);
  })
})


</script>

<template>
  <div class="header">
    <div class="nav-background desktop-only"/>
    <div class="desktop-only">
      <div class="absolute width-100 height-100">
        <div class="background fast-scroll"/>
      </div>
    </div>
    <div class="mobile-only">
      <div class="absolute width-100 height-100">
        <div class="background"/>
      </div>
    </div>
    <NavPullout/>
    <div class="desktop-only">
      <div id="nav-container">
        <nav>
          <NavLinks/>
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
          <div class="subtitle margin-0 relative">{{ subtitle }}<span class="cursor-blink"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

p, a {
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  color: white
}

.header {
  position: relative;
  min-height: 100vh;
}

.background {
  position: relative;
  background-image: url("/image/header-background.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  width: 100%;
  height: 100%;
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

nav > :deep(.links) {
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

nav :deep(.link) {
  height: 100%;
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



nav :deep(.links-right) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-left: auto;
}

.cursor-blink {
  position: absolute;
  bottom: 0.25rem;
  animation: blink 1s step-start infinite;
  background-color: white;
  width: 0.1rem;
  margin-left: 0.2rem;
  height: 1em;
  opacity: 1;
}

.subtitle {
  min-height: 2rem;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .background {
    background-attachment: scroll;
  }
}


</style>