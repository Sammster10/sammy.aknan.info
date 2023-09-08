<script setup lang="ts">

</script>

<template>
  <ShortTextPanel>
    <h1 class="margin-1 letter-spacing-negative-05 txt-center">My Portfolio<LinkIcon to="/portfolio"/></h1>
    <hr>

    <div class="container">
      <p class="desktop-only">
        My complete portfolio can be viewed <router-link to="/portfolio">here</router-link>. It consists of various projects, ranging from <b>game
        <span class="image">
            <span class="img"/>
          </span>
        development, web development, content creation, and more.</b> I prefer to work on projects that
        challenge me and allow me to learn new things. My language of
        choice is Java, mostly because how it integrates with <b>Minecraft</b> - which you'll notice is a common theme in my projects.
        I've also included a roadmap of how I got to where I am today below. I hope you enjoy!
      </p>
      <p class="mobile-only">
        My complete portfolio can be viewed <router-link to="/portfolio">here</router-link>. It consists of various projects, ranging from <b>game development,
        web development, content creation, and more.</b> I prefer to work on projects that
        challenge me and allow me to learn new things. My language of
        choice is Java, mostly because how it integrates with <b>Minecraft</b> - which you'll notice is a
        <span class="image">
            <span class="img"/>
          </span>
        common theme in my projects.
        I've also included a roadmap of how I got to where I am today below. I hope you enjoy!
      </p>
    </div>
  </ShortTextPanel>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  margin-inline: 8rem;
}

.image {
  float: left;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
  height: 101%;
  display: flex;
  align-items: flex-end;
  shape-outside: inset(calc(100% - 12rem) 0 0);
}

@media (max-width: 768px) {
  .container {
    margin-inline: 2rem;
  }

  .image {
    shape-outside: inset(calc(100% - 16rem) 0 0);
  }

  .img {
    height: 16rem !important;
    background-size: 250% !important;
    background-position: -8.5rem;

    aspect-ratio: 1 / 1 !important;
  }
}

.img {
  height: 12rem;
  aspect-ratio: 2136 / 884;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0.5rem;


  background-image: url("/image/javacode.jpg");
}

p {
  text-align: justify;
  margin: 0;
}
</style>