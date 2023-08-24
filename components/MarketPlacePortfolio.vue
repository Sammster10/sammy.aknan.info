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


  </PortfolioDisplay>
</template>

<style scoped>

</style>