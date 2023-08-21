<script setup lang="ts">
import config from "assets/config/portfolio.json";
</script>

<template>
  <title>Sammy | Portfolio</title>

  <div class="width-clamp inline-margin-auto">

    <div class="container">
      <h2>Minecraft Marketplace Content</h2>
      <div class="section">
        <div class="intro">
          <p>
          <span class="left-image">
            <img src="https://www.minecraft.net/content/dam/games/minecraft/marketplace/mediablock1.png"
                 alt="minecraft marketplace image">
          </span>
            The Minecraft Marketplace is a service that both individuals and large organizations can apply for in order
            to sell Minecraft content (skins, worlds, textures, etc...) directly to customers via Minecraft's built in
            store. I've been part of a few small teams where I have collaborated with others to create fully interactive
            game-modes that were later published on the Minecraft Marketplace. For about half of these projects, I was
            the
            project lead; I came up with the various feature sets that would be implemented into the game as well as
            deciding what assets the project would need. Generally I worked on the more technical side of things - I'm a
            software developer after all so it only makes sense that I programmed these game-modes rather than drawing
            sprites.</p>
        </div>
        <div class="interactive-portfolio">
          <h1>I want users to be able to interact and explore my portfolio in this area. It will be scrollable</h1>
        </div>
      </div>

      <hr>

      <h2>YouTube Videos</h2>
      <div class="section">

        <div class="intro">
          <p>
          <span class="left-image wide">
            <img src="/portfolio/yt_thumbnail.jpg"
                 alt="minecraft marketplace image">
          </span>
            The Minecraft Marketplace is a service that both individuals and large organizations can apply for in order
            to sell Minecraft content (skins, worlds, textures, etc...) directly to customers via Minecraft's built in
            store. I've been part of a few small teams where I have collaborated with others to create fully interactive
            game-modes that were later published on the Minecraft Marketplace. For about half of these projects, I was
            the
            project lead; I came up with the various feature sets that would be implemented into the game as well as
            deciding what assets the project would need. Generally I worked on the more technical side of things - I'm a
            software developer after all so it only makes sense that I programmed these game-modes rather than drawing
            sprites.</p>
        </div>
        <div class="interactive-portfolio">
          <h1>I want users to be able to interact and explore my portfolio in this area. It will be scrollable</h1>
        </div>
      </div>

      <hr>

      <h2>Websites: ReactJS, NuxtJS</h2>
      <div class="section">

        <div class="intro">
          <p>
          <span class="left-image wide">
            <img src="/portfolio/yt_thumbnail.jpg"
                 alt="minecraft marketplace image">
          </span>
            The Minecraft Marketplace is a service that both individuals and large organizations can apply for in order
            to sell Minecraft content (skins, worlds, textures, etc...) directly to customers via Minecraft's built in
            store. I've been part of a few small teams where I have collaborated with others to create fully interactive
            game-modes that were later published on the Minecraft Marketplace. For about half of these projects, I was
            the
            project lead; I came up with the various feature sets that would be implemented into the game as well as
            deciding what assets the project would need. Generally I worked on the more technical side of things - I'm a
            software developer after all so it only makes sense that I programmed these game-modes rather than drawing
            sprites.</p>
        </div>
        <div class="interactive-portfolio">
          <h1>I want users to be able to interact and explore my portfolio in this area. It will be scrollable</h1>
        </div>
      </div>

      <hr>

      <h2>Minecraft Servers</h2>
      <div class="section">

        <div class="intro">
          <p>
          <span class="left-image wide">
            <img src="/portfolio/yt_thumbnail.jpg"
                 alt="minecraft marketplace image">
          </span>
            The Minecraft Marketplace is a service that both individuals and large organizations can apply for in order
            to sell Minecraft content (skins, worlds, textures, etc...) directly to customers via Minecraft's built in
            store. I've been part of a few small teams where I have collaborated with others to create fully interactive
            game-modes that were later published on the Minecraft Marketplace. For about half of these projects, I was
            the
            project lead; I came up with the various feature sets that would be implemented into the game as well as
            deciding what assets the project would need. Generally I worked on the more technical side of things - I'm a
            software developer after all so it only makes sense that I programmed these game-modes rather than drawing
            sprites.</p>
        </div>
        <div class="interactive-portfolio">
          <h1>I want users to be able to interact and explore my portfolio in this area. It will be scrollable</h1>
        </div>
      </div>

      <hr>

      <h2>Miscellaneous Projects</h2>
      <div class="section">

        <div class="intro">
          <p>
          <span class="left-image wide">
            <img src="/portfolio/yt_thumbnail.jpg"
                 alt="minecraft marketplace image">
          </span>
            The Minecraft Marketplace is a service that both individuals and large organizations can apply for in order
            to sell Minecraft content (skins, worlds, textures, etc...) directly to customers via Minecraft's built in
            store. I've been part of a few small teams where I have collaborated with others to create fully interactive
            game-modes that were later published on the Minecraft Marketplace. For about half of these projects, I was
            the
            project lead; I came up with the various feature sets that would be implemented into the game as well as
            deciding what assets the project would need. Generally I worked on the more technical side of things - I'm a
            software developer after all so it only makes sense that I programmed these game-modes rather than drawing
            sprites.</p>
        </div>
        <div class="interactive-portfolio">
          <h1>I want users to be able to interact and explore my portfolio in this area. It will be scrollable</h1>
        </div>
      </div>

      <hr>


    </div>
  </div>
</template>

<style scoped>

.container {
  background-color: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  margin: 2rem;
  padding: 0.5rem;
}

.intro {
  display: flex;
  position: relative;
  overflow: hidden;
}

h2 {
  font-weight: 700;
  letter-spacing: -0.1rem;
  text-align: center;
  margin-inline: 0;
  margin-block: 1rem;
  padding: 0;
}

.intro p {
  text-align: justify;
  margin: 0;
}

.left-image {
  float: left;
  margin-right: 0.5rem;
  height: 100%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 15rem) 0 0);
}

.wide {
  shape-outside: inset(calc(100% - 13rem) 0 0);
}

.wide img {
  height: 13rem !important;
}

.left-image img {
  height: 15rem;
}

.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-inline: 4rem;
}

@media screen and (max-width: 768px) {
  .section {
    grid-template-columns: 1fr;
    padding-inline: 2rem;
  }

  .wide {
    shape-outside: inset(calc(100% - 9rem) 0 0) !important;
  }

  .wide img {
    height: 9rem !important;
  }

  .left-image {
    shape-outside: inset(calc(100% - 12rem) 0 0);
  }

  .left-image img {
    height: 12rem;
  }
}

hr {
  margin-block: 1rem;
  margin-inline: auto;
  border: none;
  border-bottom: 0.2rem solid black;
  width: min(25rem, 50%);

}

.interactive-portfolio {
  background-color: red;
}

</style>