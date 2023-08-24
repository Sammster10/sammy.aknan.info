<script setup lang="ts">

import LinkIcon from "~/components/LinkIcon.vue";
import ExpandableImage from "~/components/ExpandableImage.vue";

</script>

<template>
  <PortfolioDisplay>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Prison Mines Addon<LinkIcon to="https://github.com/Sammster10/MCBE-Prison-Mines" /></h3>
        <hr>
        <p>An open-source <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> addon for users to create Prison Mines. Want to see it in action? Check it out on <a href="https://youtu.be/-hBCJksz_Vk" target="_blank">YouTube</a>!</p>
      </div>
      <ExpandableImage src="/portfolio/yt_prisonmines.jpg"/>
    </div>


  </PortfolioDisplay>
</template>

<style scoped>

</style>