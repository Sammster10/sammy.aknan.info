<script setup lang="ts">

import LinkIcon from "~/components/LinkIcon.vue";
import ExpandableImage from "~/components/ExpandableImage.vue";

</script>

<template>
  <PortfolioDisplay>
    <div class="item">
      <div class="description">
        <h3>How To: <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Prison Mines<LinkIcon to="https://youtu.be/-hBCJksz_Vk" /></h3>
        <hr>
        <p>I show viewers a free public addon that I made which allows players to easily create and manage <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Prison mines.</p>
      </div>
      <ExpandableImage src="/portfolio/yt_prisonmines.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3>How To: Per-Player World..<LinkIcon to="https://youtu.be/TdLcXYWYjWY" /></h3>
        <hr>
        <p>I show viewers how to create per-player world borders using Java code for their Minecraft Servers.</p>
      </div>
      <ExpandableImage src="/portfolio/yt_perplayer.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3>How To: <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Custom Comm..<LinkIcon to="https://youtu.be/zWLrFTpUlgc" /></h3>
        <hr>
        <p>I teach viewers how to code their own custom commands. Additionally, I provide sample code available for download.</p>
      </div>
      <ExpandableImage src="/portfolio/yt_customcommands.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3>Addon: <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Builder Addo..<LinkIcon to="https://youtu.be/0_ft-bVyJ8Q" /></h3>
        <hr>
        <p>I show viewers an free public addon that me and a friend made which will assist them in building.</p>
      </div>
      <ExpandableImage src="/portfolio/yt_builderblocks.jpg"/>
    </div>
    <div class="item">
      <div class="description">
        <h3>Addon: <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Gen Buckets<LinkIcon to="https://youtu.be/11iLLakames" /></h3>
        <hr>
        <p>I show viewers how to download and use an addon I made which creates Faction-style Gen Buckets.</p>
      </div>
      <ExpandableImage src="/portfolio/yt_genbuckets.jpg"/>
    </div>


  </PortfolioDisplay>
</template>

<style scoped>

</style>