<script setup lang="ts">


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

function nextChar() {
  if (pause > 0) {
    pause--;
    return;
  }

  let string = subtitles[index];


  if (forward) {
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
      return;
    }
  } else {
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


  if (index >= subtitles.length) {
    index = 0;
  }
}

setInterval(() => {
  nextChar();
}, 50);

</script>

<template>
  <div class="relative">
    <div class="fade-in" data-fade-after="0.8">
      <img src="/image/background.jpg" alt="background image"
           class="absolute width-100 height-100 cover overflow-hidden z-index-negative-3">
      <div class="absolute width-100 height-100 bg-black opacity-50 z-index-negative-2"/>
    </div>
    <nav class="row center white fade-in" data-fade-after="1.2">
      <p id="label" class="hover-scale">Portfolio</p>
      <div class="row" id="links">
        <p class="hover-scale">Home</p>
        <p class="hover-scale">About</p>
        <p class="hover-scale">Services</p>
        <p class="hover-scale">Contact</p>
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
}

#links {
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