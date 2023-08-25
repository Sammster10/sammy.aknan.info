<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

/* TODO:
    Improve README.md
    SEO - may not have to edit anything, but look into it
    Config the site to properly embed into twitter, Discord, Facebook etc...
    Extract nav links to a reusable component
    Pull out portions of the destination cards for usability and to make the code more concise
    Services page
    Contact page
 */

const elementsToFade: { [key: number]: HTMLElement[] } = {};

function slowScroll() {
  scrollSpeed(0.2, "slow-scroll");
}

function fastScroll() {
  scrollSpeed(0.5, "fast-scroll");
}

function scrollSpeed(speed: number, className: string) {
  let lastDistFromTop = 0;
  window.addEventListener('scroll', function () {
    const distanceFromTop = document.documentElement.scrollTop;

    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.' + className);

    if (distanceFromTop > lastDistFromTop) {
      // Scrolling down
      elements.forEach(element => {
        element.style.backgroundPositionY = '-' + (distanceFromTop * speed) + 'px';
      })
    } else {
      // Scrolling up
      elements.forEach(element => {
        element.style.backgroundPositionY = '-' + (distanceFromTop * speed) + 'px';
      })
    }

    lastDistFromTop = distanceFromTop;
  });
}

function getElementsToFade() {
  const elements = document.querySelectorAll(".fade-in") as NodeListOf<HTMLElement>;
  elements.forEach((element) => {
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
          element.classList.add("show");
        });
        delete elementsToFade[parseFloat(key)];
      }
    })
  }, 100);
}

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
      (rect.top + rect.height / 2) >= 0 &&
      (rect.bottom - rect.height / 2) <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function addShowClassOnScroll() {
  const elementsToAnimate: NodeListOf<HTMLElement> = document.querySelectorAll('.fade-in-on-screen');

  elementsToAnimate.forEach((element: HTMLElement) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

onMounted(() => {
  slowScroll();
  fastScroll();
  getElementsToFade();
  fadeElements();


  window.addEventListener('scroll', addShowClassOnScroll);
  window.addEventListener('resize', addShowClassOnScroll);
  // Call the function on page load in case some elements are initially in the viewport.
  addShowClassOnScroll();
})

</script>

<template>
  <div id="main-background" class="slow-scroll"/>
  <Header/>
  <NuxtPage/>
  <Footer/>
  <ThemeButton />
</template>

<style scoped>

#main-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  aspect-ratio: 4447 / 6670;
  background-image: url("/image/background.jpg");
  background-size: 100%;
  min-height: 100%;
  background-repeat: repeat-y;
  z-index: -1;
}

#main-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;
  aspect-ratio: 4447 / 6670;
  background-color: var(--theme-app-bg);
  z-index: -1;
}
</style>