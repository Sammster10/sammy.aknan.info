<script setup lang="ts">

import LinkIcon from "~/components/LinkIcon.vue";
import ExpandableImage from "~/components/ExpandableImage.vue";

</script>

<template>
  <PortfolioDisplay>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCJE<span class="tooltiptext">Minecraft Java Edition</span></span> Server: Prisons<LinkIcon to="/workinprogress"/>
        </h3>
        <hr>
        <p>Static Prisons was my latest Minecraft server. The main plugin was coded in Java, click <a
            href="https://github.com/Sammster10/Static-Prisons-Season-2">here</a> to view the source code.</p>
      </div>
      <ExpandableImage src="/portfolio/prisons.webp"/>
    </div>

  </PortfolioDisplay>
</template>

<style scoped>

</style>