<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";


const elementsToFade: {[key: number]: object[]} = {};

function getElementsToFade() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    // @ts-ignore
    const fadeAfter = element.dataset.fadeAfter;
    if (fadeAfter) {
      const fadeAfterNum = parseFloat(fadeAfter);
      if (elementsToFade[fadeAfterNum]) {
        elementsToFade[fadeAfterNum].push(element);
      } else {
        elementsToFade[fadeAfterNum] = [element];
      }
    }
  });
}

function fadeElements() {
  let totalFadeTime = 0;
  setInterval(() => {
    totalFadeTime += 0.1;
    Object.keys(elementsToFade).forEach(key => {
      if (parseFloat(key) <= totalFadeTime) {
        elementsToFade[parseFloat(key)].forEach(element => {
          // @ts-ignore
          element.classList.add("show");
        });
        delete elementsToFade[parseFloat(key)];
      }
    })
  }, 100);
}

onMounted(() => {
  getElementsToFade();
  fadeElements();
})

</script>

<template>
  <Header/>
  <div class="fade-in" data-fade-after="2">
    <NuxtPage/>
    <Footer/>
  </div>
</template>