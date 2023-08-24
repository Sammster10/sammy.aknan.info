<script setup lang="ts">

import LinkIcon from "~/components/LinkIcon.vue";
import ExpandableImage from "~/components/ExpandableImage.vue";
import config from "~/assets/config/config.json"

</script>

<template>
  <PortfolioDisplay>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">arkhamstudios.net<span class="tooltiptext">Arkham Studios</span></span><LinkIcon to="https://arkhamstudios.net"/>
        </h3>
        <hr>
        <p><a href="https://arkhamstudios.net">arkhamstudios.net</a> was created using NuxtJS as a commission for an <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> development team.</p>
      </div>
      <ExpandableImage src="/portfolio/arkhamstudios.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">sammy.aknan.info<span class="tooltiptext">Sammy Aknan's Portfolio</span></span><LinkIcon to="https://sammy.aknan.info"/>
        </h3>
        <hr>
        <p>I created <a href="https://sammy.aknan.info">sammy.aknan.info</a> using NuxtJS. Did you know that my site is open-source? Check it out by clicking <a :href="config.source_link" target="_blank">here</a>!</p>
      </div>
      <ExpandableImage src="/portfolio/sammyaknan.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">static-studios.net<span class="tooltiptext">Static Studios</span></span><LinkIcon to="https://static-studios.net"/>
        </h3>
        <hr>
        <p>I created <a href="https://static-studios.net">static-studios.net</a> using ReactJS for my <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span>/<span class="tooltip">MCJE<span class="tooltiptext">Minecraft Java Edition</span></span> development team.</p>
      </div>
      <ExpandableImage src="/portfolio/static-studios.jpg"/>
    </div>

  </PortfolioDisplay>
</template>

<style scoped>

</style>