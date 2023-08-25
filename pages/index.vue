<script setup lang="ts">

import roadmapConfig from "~/assets/config/roadmap.json";
import {isMobile} from "~/util/utils";
import SmallCard from "~/components/SmallCard.vue";
import Destination from "~/components/Destination.vue";

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
  <title>Sammy | Home</title>
  <div class="relative">
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
  top: 0;
  left: 50%;
  width: 0.5rem;
  height: calc(100% - 10rem);
  background-color: var(--line-color);
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