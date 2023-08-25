<script setup lang="ts">
import config from "~/assets/config/config.json";
import YouTubeSVG from "~/components/YouTubeSVG.vue";
import DiscordSVG from "~/components/DiscordSVG.vue";
import Instagram from "~/pages/instagram.vue";
import InstagramSVG from "~/components/InstagramSVG.vue";
import LinkedInSVG from "~/components/LinkedInSVG.vue";
import GitHubSVG from "~/components/GitHubSVG.vue";
</script>

<template>
  <footer>
    <div class="socials">
      <a :href="config.socials.github" target="_blank">
        <GitHubSVG />
      </a>
      <a :href="config.socials.linkedin" target="_blank">
        <LinkedInSVG />
      </a>
      <a :href="config.socials.instagram" target="_blank">
        <InstagramSVG />
      </a>
      <a :href="config.socials.discord" target="_blank">
        <DiscordSVG />
      </a>
      <a :href="config.socials.youtube" target="_blank">
        <YouTubeSVG />
      </a>
    </div>
    <div class="links">
      <router-link to="/contact">Contact</router-link>
      • <a :href="config.source_link">View Source Code</a>
    </div>
    <div class="last-updated">
      Last Updated: {{ config.last_updated }}
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 2rem;
  background-color: var(--footer-bg);
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  min-height: 2rem;
}

svg {
  height: 1.5rem;
  aspect-ratio: 1 / 1;
  fill: white;
  padding: 0;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
}

.socials a {
  margin: 0 0.5rem;
}

.socials a:hover {
  opacity: 0.7;
}

.links {
  text-align: center;
  color: white;
  font-size: 0.7rem;
  margin-block: 0.5rem
}

.links a {
  color: white;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.last-updated {
  text-align: center;
  color: white;
  font-size: 0.7rem;
}

</style>