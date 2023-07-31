<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";


const elementsToFade: { [key: number]: object[] } = {};

function slowScroll() {
  scrollSpeed(0.2, "slow-scroll");
}

function fastScroll() {
  scrollSpeed(0.5, "fast-scroll");
}

function scrollSpeed(speed: number, className: string) {
  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    const st = document.documentElement.scrollTop;

    const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.' + className);

    if (st > lastScrollTop) {
      // Scrolling down
      elements.forEach(element => {
        element.style.backgroundPositionY = '-' + (st * speed) + 'px';
      })
    } else {
      // Scrolling up
      elements.forEach(element => {
        element.style.backgroundPositionY = '-' + (st * speed) + 'px';
      })
    }

    lastScrollTop = st;
  });
}

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

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
  <div id="main-background" class="slow-scroll fade-in" data-fade-after="2"/>
  <Header/>
  <div class="fade-in" data-fade-after="2.8">
    <NuxtPage/>
    <Footer/>
  </div>
</template>

<style scoped>

#main-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  aspect-ratio: 4447 / 6670;
  background-image:  url("/image/background.jpg");
  background-size: 100%;
  background-repeat: repeat-y;
  z-index: -1;
}

#main-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  aspect-ratio: 4447 / 6670;
  background-color: #ffffff;
  opacity: 0.9;
  z-index: -1;
}
</style>