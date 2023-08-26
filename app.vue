<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

/* TODO:
    Improve README.md
    Some of the content in the portfolio page should link back to individual pages detailing the content. eg servers
 */
useHead({
  meta: [
    {
      name: "og:title",
      content: "Sammy Aknan's Portfolio"
    },
    {
      name: "og:image",
      content: "/image/profile.jpg"
    },
    {
      name: "og:description",
      content: "Sammy Aknan's Portfolio - Software Developer; CS Major at Virginia Tech."
    },
    {
      name: "keywords",
      content: "sammy, aknan, sam, software developer, web-dev, web development, minecraft, plugin, developer, java, javascript, typescript, nuxt, vue, node, discord, bot, youtube, video, tutorial, portfolio, vt, virginia tech"
    },
  ]
})


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