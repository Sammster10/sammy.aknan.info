<script setup lang="ts">
useHeadSafe({
  title: "Sammy | About",
  meta: [
    {
      name: "description",
      content: "Information about Sammy Aknan.",
    },
  ],
})
</script>

<template>

  <BasicTextContent>
    <section>
      <h2>Hey, I'm Sam!</h2>
      <hr>
      <p>Hi, I'm a Software Developer. I have experience with many different languages and concepts. In my past, I've
        done
        game development, backend development, frontend development, and full-stack development. Additionally, I have
        experience using relational databases and I can comfortably navigate around the Linux OS using BASH.
        <br>
        <br>
        I am currently a first-year student (Class of 27') at Virginia Tech, pursuing a degree in Computer Science. In
        high school, I studied cyberscurity. While it's still within the realm of technology, I love the freedom that
        software development offers me; having knowledge of both fields has allowed me to create secure software
        applications.
      </p>
    </section>

    <section>
      <h2>My History With Minecraft:</h2>
      <hr>
      <p>If you've taken a brief moment to take a look at my portfolio, you'll notice that <b>a lot</b> of my experience
        comes from the video game Minecraft. From the moment that I first learned about Minecraft command blocks I was
        hooked. Using command blocks offered me my first experience with software development - command blocks are
        comparable to block programming, involving conditional statements, loops, and more. Later, I learned about
        .mcfunction files. These are equivalent to batch files (.bat) and/or bash scripts (.sh).
        <br>
        <br>
        I switched from using Minecraft commands entirely to using actual programming languages. It started off with
        JavaScript, however, this quickly changed to Java once I switched from Minecraft Bedrock Edition (MCBE) to
        Minecraft Java Edition (MCJE). I learned to create Minecraft Server plugins - which, later on, allowed me to
        create my own Minecraft server.
        <br>
        <br>
        I created my own Minecraft server, which was a prison server. I coded the server's main plugin from scratch - it
        consisted of over 30,000 lines of code. Along with the server plugin, there were other aspects of the server
        that had to be considered. I had to create a Discord bot for the server which allowed users to verify and link
        their accounts. This was done using Python. Additionally, I had to work with relational databases such as MySQL
        in order to store data in a central location so that multiple applications (such as Discord, the server, and the
        server's website) could access the same data in real-time. As mentioned earlier, I also created a website for the
        Server using ReactJS.
      </p>
    </section>

    <section>
      <h2>My Skills:</h2>
      <hr>
      <p>I have experience with multiple: programming languages, operating systems and command line interfaces,
        programming frameworks, developer tools, and more. You can find a list which details my skill set below.</p>
      <h4>List of skills:</h4>
      <ul class="width-max inline-margin-auto txt-left">
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>GitHub (git)</li>
        <li>Linux (BASH)</li>
        <li>NuxtJS</li>
        <li>ReactJS</li>
        <li>JSON</li>
        <li>YAML</li>
      </ul>
    </section>

  </BasicTextContent>
</template>

<style scoped>

ul {
  margin-top: 0;
}

h4 {
  margin-bottom: 0;
}

</style>