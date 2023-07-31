<script setup lang="ts">
import DestinationRight from "~/components/DestinationRight.vue";
</script>

<template>
  <div class="relative">
    <div id="vertical-line"/>
    <div class="row">
      <div class="column">
        <DestinationLeft>
          <Card date="2018">
            <template v-slot:header>
              <h3 class="block-margin-0 letter-spacing-negative-05">Minecraft Commands:</h3>
              <hr class="left">
            </template>
            <p>
              It all began with Minecraft. The creativity that I was offered was unmatched - it trained my brain and
              helped
              me develop strong problem solving skills. Starting in 2018, I began experimenting with Minecraft's
              command
              system; it is comparable to block programming. Even though I was still only learning at the time, I
              quickly
              turned my limited skill set into a profitable side hustle.
            </p>
          </Card>
        </DestinationLeft>
        <DestinationLeft>
          <Card date="2021">
            <template v-slot:header>
              <h3 class="block-margin-0 letter-spacing-negative-05">Minecraft Plugins:</h3>
              <hr class="left">
            </template>
            <p>
              Up until this point, I was only playing Minecraft Bedrock Edition, and this was a huge limitation. I
              finally made the jump ot Minecraft Java Edition, and I was blown away by the amount of freedom I had. I
              initially stuck to my tendencies and began to develop Minecraft commands, but I quickly realized that
              there was a much better way to do things. I began to learn Java, and while it was difficult since I had no
              formal
              education on the topic, I was able to learn the basics and begin to develop Minecraft plugins.
            </p>
          </Card>
        </DestinationLeft>
      </div>
      <div class="column">
        <!-- spacer -->
        <div/>
        <DestinationRight>
          <Card date="2019">
            <template v-slot:header>
              <h3 class="block-margin-0 letter-spacing-negative-05">Minecraft Realms:</h3>
              <hr class="left">
            </template>
            <p>
              Moving on to bigger and better things, I gathered a team of staff members and we began to develop a
              Minecraft
              Realm network. We had ~40 concurrent players online at any given time, and things were looking good. At
              this
              time, I got my hands on my first computer and I began to dive into the game files. I learned about JSON
              for the first
              time, and while it was probably a simple config file - I finally learned how much potential there was in
              programming.
            </p>
          </Card>
        </DestinationRight>
        <DestinationRight>
          <Card date="2021">
            <template v-slot:header>
              <h3 class="block-margin-0 letter-spacing-negative-05">Minecraft Servers:</h3>
              <hr class="left">
            </template>
            <p>
              With my knowledge of of Java, I created a Minecraft Java Edition server, and I surprised myself with what
              I was capable of! The server was a great success and I was learning super quickly. The server ran in the
              cloud and had multiple different aspects to it. I had a website, a Discord server, a Minecraft server, and
              a Web store. This forced me to learn about Databases in order to store all this data in one centralized
              location.
            </p>
          </Card>
        </DestinationRight>

      </div>
    </div>
  </div>
</template>

<style scoped>
#vertical-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0.4rem;
  height: 100%;
  background-color: #727272;
}

hr.right {
  margin-right: 0;
}

hr.left {
  margin-left: 0;
}

hr {
  border-width: 0.08rem;
  border-color: black;
  width: 50%;
}

.column {
  width: 50%;
  gap: 10rem;
}

.row {
  padding-top: 5rem;
  align-items: flex-start;
}

</style>