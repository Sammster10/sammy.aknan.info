<script setup lang="ts">
import DestinationRight from "~/components/DestinationRight.vue";

import roadmapConfig from "~/assets/config/roadmap.json";

let leftCards = roadmapConfig.roadmap.filter((_, index) => index % 2 === 0);
const rightCards = roadmapConfig.roadmap.filter((_, index) => index % 2 === 1);

</script>

<template>
  <title>Sammy | Home</title>
  <div class="relative">
    <div id="vertical-line"/>
    <div class="row">
      <div class="column">
        <div class="width-100" v-for="card in leftCards">
          <DestinationLeft :date="card.date">
            <Card :header="card.header" :img="card.image">
              <p v-for="desc in card.description">
                {{ desc }}
              </p>
            </Card>
          </DestinationLeft>
        </div>
      </div>
      <div class="column">
        <!-- spacer -->
        <div/>
        <div class="width-100" v-for="card in rightCards">
          <DestinationRight :date="card.date">
            <Card :header="card.header" :img="card.image">
              <p v-for="desc in card.description">
                {{ desc }}
              </p>
            </Card>
          </DestinationRight>
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
  width: 0.4rem;
  height: calc(100% - 9rem);
  background-color: #727272;
}

.column {
  width: 50%;
  gap: 10rem;
}

.row {
  padding-top: 5rem;
  align-items: flex-start;
}

</style>