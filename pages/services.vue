<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Services",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's services.",
    },
  ],
})
</script>

<template>
  <BasicTextContent>
    <section>
      <h2>What Can I Do For You?</h2>
      <hr>
      <p>
        If you haven't already, take a look at what I'm capable of on my <router-link to="/about#skills">about page</router-link>.
        I'm usually available for hire, so if you're interested in working with me, feel free to reach out. Whether you're looking
        to get a small website made for your company/organization, or you're looking to get a full-stack application made, I'm
        your guy!
      </p>
    </section>
    <section>
      <h2>Web-Development</h2>
      <hr>
      <p>
        I have experience with a handful of frontend frameworks, but I typically work with NuxtJS. If you're looking to get a
        website made, I can do that for you! I can create a website for your company/organization, or I can create a website for
        personal use. If you're in need of a website, don't hesitate to <router-link to="/contact">contact</router-link> me. Please note that I am
        not a graphic designer, nor am I a UI/UX designer. I can create a functional website for you, but I cannot guarantee that
        I will be able to create a design from scratch. If you already have a design in mind, I can work with that. If not, then
        let's work on it together!
      </p>
    </section>
    <section>
      <h2>Minecraft Server Plugins</h2>
      <hr>
      <p>
        Whether it's Minecraft Bedrock Edition or Minecraft Java Edition, I can create a plugin for your server. I have experience
        with both platforms, and I can create a plugin for either one. If you'd like me to update/add to an existing plugin, I can
        do that as well. For Minecraft Java Edition, I can create a plugin for servers based on Spigot and/or Paper. If this sounds
        like something you're interested in, feel free to <router-link to="/contact">contact</router-link> me.
      </p>
    </section>
    <section>
      <h2>Other Projects</h2>
      <hr>
      <p>
        I'm always willing to take on a new project, so if there's something that you'd like me to work on that isn't listed above,
        please <router-link to="/contact">contact</router-link> me and we can discuss it further. Please view my <router-link to="/portfolio">portfolio</router-link>
        to get a better idea of what I'm capable of. For example, I am more than willing to create a Discord bot for you. If
        you're unsure if I'm capable of doing something, it never hurts to ask!
      </p>
    </section>
  </BasicTextContent>
</template>

<style scoped>

</style>