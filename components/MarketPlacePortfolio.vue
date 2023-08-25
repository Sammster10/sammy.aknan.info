<script setup lang="ts">

import LinkIcon from "~/components/LinkIcon.vue";
import ExpandableImage from "~/components/ExpandableImage.vue";

</script>

<template>
  <PortfolioDisplay>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">SkyBlock Game-mode<span class="tooltiptext">SkyBlock: Blocks And Biomes</span></span> <LinkIcon to="https://www.minecraft.net/en-us/marketplace/pdp?id=d0046fbd-1771-4f98-8783-fcd2adb0ef13" /></h3>
        <hr>
        <p>An <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> SkyBlock game-mode which is available for purchase on the Minecraft Marketplace. Check it out on <a href="https://youtu.be/-hBCJksz_Vk" target="_blank">YouTube</a>!</p>
      </div>
      <ExpandableImage src="/portfolio/skyblockblocksandbiomes.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3>Capture The Flag <LinkIcon to="https://www.minecraft.net/en-us/marketplace/pdp?id=b91ac1f3-1b80-492d-9a50-9f7c26fe14ca" /></h3>
        <hr>
        <p>Two teams go head to head, trying to destroy one another, while protecting themselves. This is available for purchase.</p>
      </div>
      <ExpandableImage src="/portfolio/capturetheflag.webp"/>
    </div>


  </PortfolioDisplay>
</template>

<style scoped>

</style>