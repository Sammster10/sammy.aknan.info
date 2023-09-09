<script setup lang="ts">

import roadmapConfig from "~/assets/config/roadmap.json";
import {isMobile} from "~/util/utils";
import SmallCard from "~/components/SmallCard.vue";
import Destination from "~/components/Destination.vue";
import RectangularCard from "~/components/RectangularCard.vue";

let leftCards = roadmapConfig.roadmap.filter((_, index) => index % 2 === 0);
const rightCards = roadmapConfig.roadmap.filter((_, index) => index % 2 === 1);

const windowWidth = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div class="relative">
    <RectangularCard class="inline-margin-auto">
      <h1 class="txt-center margin-0 letter-spacing-negative-05">How I Got Here (Roadmap)</h1>
    </RectangularCard>
    <div class="mobile-only" id="top-line" />
  </div>
  <div class="relative top-pad-3">
    <div v-if="isMobile(windowWidth)" class="mobile-only">
      <div id="vertical-line" class="left"/>
      <!-- spacer -->
      <div class="block-pad-2" />
      <div class="column">
        <div class="width-100" v-for="card in roadmapConfig.roadmap">
          <MobileDestination :date="card.date">
            <SmallCard :header="card.header" :img="card.image">
              <p v-for="desc in card.description">
                {{ desc }}
              </p>
            </SmallCard>
          </MobileDestination>
        </div>
      </div>
    </div>
    <div v-else>
      <div id="vertical-line"/>
      <div class="row width-clamp inline-margin-auto">
        <div class="column">
          <div class="width-100" v-for="card in leftCards">
            <Destination :date="card.date" :left="true">
              <Card :header="card.header" :img="card.image">
                <p v-for="desc in card.description">
                  {{ desc }}
                </p>
              </Card>
            </Destination>
          </div>
        </div>
        <div class="column">
          <!-- spacer -->
          <div/>
          <div class="width-100" v-for="card in rightCards">
            <Destination :date="card.date" :left="false">
              <Card :header="card.header" :img="card.image">
                <p v-for="desc in card.description">
                  {{ desc }}
                </p>
              </Card>
            </Destination>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#vertical-line {
  position: absolute;
  top: -1rem;
  left: 50%;
  width: 0.5rem;
  height: calc(100% - 9rem);
  background-color: var(--line-color);

  z-index: -1;
}

@media (max-width: 768px) {
  #vertical-line {
    top: 8rem;
  }

  #top-line:after {
    content: "";
    position: absolute;

    top: 7rem;
    left: -2.5rem;
    width: 4rem;
    height: 5rem;

    border-radius: 1rem 0 0 0;
    border-width: 0.5rem 0 0 0.5rem;
    border-style: solid;
    border-color: var(--line-color);
  }
}

#top-line {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-100%);

  width: calc(50% - 4rem);
  height: 7rem;
  border-radius: 0 0 1rem 0;
  border-width: 0 0.5rem 0.5rem 0;
  border-style: solid;
  border-color: var(--line-color);

  z-index: -1;
}

.left {
  left: 1rem !important;
}

.column {
  width: 50%;
  gap: 10rem;
}

.mobile-only .column {
  width: 100% !important;
  gap: 5rem !important;
}

.row {
  padding-top: 5rem;
  align-items: flex-start;
}
</style>