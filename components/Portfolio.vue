<script setup lang="ts">

</script>

<template>
  <RectangularCard class="inline-margin-auto">
    <h1 class="margin-0 letter-spacing-negative-05">My Portfolio:</h1>
  </RectangularCard>

  <BasicTextContent>
    <h2>Minecraft Servers/Realms</h2>
    <div class="section">

      <div class="intro">
        <p>
          <span class="left-image square">
            <img src="https://cdn.mos.cms.futurecdn.net/qjjeZPZT4MmqUgJHYFfwJF.jpg"
                 alt="minecraft realms image">
          </span>
          By far, my history with Minecraft servers has had an enormous impact on where I am today. Over the course of
          many years, I created many servers/realms (too many to count) which have seen tens of thousands of players
          connect and play on them. From using simple Minecraft commands, to using thirty thousand lines of Java code,
          each one of these servers was better than the last.</p>
      </div>
      <LazyServersPorfolio/>
    </div>

    <hr>

    <h2>YouTube Videos</h2>
    <div class="section">

      <div class="intro">
        <p>
          <span class="left-image wide">
            <img src="/portfolio/yt_perplayer.jpg"
                 alt="youtube thumbnail of minecraft tutorial video: how to make custom commands">
          </span>
          Over the years, I've created a catalog of tutorial-style YouTube videos in which I would teach people a
          programming concept, or simply show them how to complete a task. As I continued learning and my skill set
          evolved, I tried to reflect that in my YouTube videos and teach my audience more complex topics. While I
          don't make as many YouTube videos anymore, all of my videos are still publicly viewable and act as a great
          resource to view my progress over time.</p>
      </div>
      <LazyYouTubePorfolio/>
    </div>

    <hr>

    <h2>Web-development</h2>
    <div class="section">

      <div class="intro">
        <p>
          <span class="left-image square">
            <img src="/portfolio/web-dev.png"
                 alt="people constructing a web page">
          </span>
          Web-development always seemed impossible to me - I suck at graphic design, but I loved the idea of creating
          interactive websites that thousands of people could use. I understood the potential that web-development had
          to offer, so I pushed myself to learn HTML & CSS as well as web-frameworks such as ReactJS and NuxtJS. As I
          mentioned earlier, graphic design is not my area of experience. This isn't necessarily a bad thing however,
          it forces me to work super closely with my clients so that I can properly capture their vision rather than
          creating my own.</p>
      </div>
      <LazyWebDevPortfolio/>
    </div>

    <hr>

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
          sprites for them.</p>
      </div>
      <LazyMarketPlacePortfolio/>
    </div>

    <hr>

    <h2>Miscellaneous Projects</h2>
    <div class="section">

      <div class="intro">
        <p>
          <span class="left-image square">
            <img src="https://wallpaperaccess.com/full/3710385.jpg"
                 alt="gears">
          </span>
          As a developer, I have lots of side projects. Most of which aren't worth mentioning, but rather than
          creating a bunch of extra categories and making this page any longer than it needs to be, I've put together
          this collection of projects that I think are worth taking a look at.</p>
      </div>
      <LazyMiscPortfolio/>
    </div>

    <hr>

  </BasicTextContent>
</template>

<style scoped>

.intro {
  display: flex;
  position: relative;
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

img {
  border-radius: 0.5rem;
}

.left-image {
  float: left;
  margin-right: 0.5rem;
  height: 101%;
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

.square img {
  aspect-ratio: 4 / 3;
  object-fit: cover;
  height: 14rem !important;
}

.square {
  shape-outside: inset(calc(100% - 14rem) 0 0);
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

  .square img {
    aspect-ratio: 4 / 3;
    object-fit: cover;
    height: 11rem !important;
  }

  .square {
    shape-outside: inset(calc(100% - 11rem) 0 0) !important;
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
  border-bottom: 0.2rem solid var(--theme-inverse);
  width: min(25rem, 50%);
}

</style>