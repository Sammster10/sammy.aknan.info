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
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> <span
            class="tooltip">Static Network<span class="tooltiptext">Static Network was the development team behind the following MCBE Realms: Static SkyBlock, Static Factions, Static Prisons, and Static Kit PvP.</span></span><LinkIcon to="https://static-studios.net"/>
        </h3>
        <hr>
        <p><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span>
          Realm Network reaching over 15k players. View information about the individual Realms below.</p>
      </div>
      <ExpandableImage src="/portfolio/static.webp"/>
    </div>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Realm: SkyBlock<LinkIcon to="/workinprogress"/>
        </h3>
        <hr>
        <p>Static SkyBlock ran for multiple years as an <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span>
          Realm. It was coded with Minecraft commands and Molang.
        </p>
      </div>
      <ExpandableImage src="/portfolio/skyblock.webp"/>
    </div>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Realm: Factions<LinkIcon to="/workinprogress"/>
        </h3>
        <hr>
        <p>Static Factions ran for multiple years as an <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span>
          Realm. It was coded with Minecraft commands and Molang.
        </p>
      </div>
      <ExpandableImage src="/portfolio/factions.webp"/>
    </div>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Realm: Prisons<LinkIcon to="/workinprogress"/>
        </h3>
        <hr>
        <p>Static Prisons ran for multiple years as an <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span>
          Realm. It was coded with JavaScript, Minecraft commands and Molang.
        </p>
      </div>
      <ExpandableImage src="/portfolio/mcbeprisons.webp"/>
    </div>
    <div class="item">
      <div class="description">
        <h3><span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span> Realm: Kit PvP<LinkIcon to="/workinprogress"/>
        </h3>
        <hr>
        <p>Static Factions ran for multiple years as an <span class="tooltip">MCBE<span class="tooltiptext">Minecraft Bedrock Edition</span></span>
          Realm. It was coded with Minecraft commands and Molang.
        </p>
      </div>
      <ExpandableImage src="/portfolio/kitpvp.webp"/>
    </div>

  </PortfolioDisplay>
</template>

<style scoped>

</style>