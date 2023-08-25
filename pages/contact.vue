<script setup lang="ts">
useHeadSafe({
  title: "Sammy | Contact",
  meta: [
    {
      name: "description",
      content: "Sammy Aknan's contact information."
    },
  ],
})

</script>

<template>
  <BasicTextContent>
    <section>
      <h2>Let's Get In Contact!</h2>
      <hr>
      <p>
        If you would like to get in contact with me, feel free to reach out and send me a message via one of my socials:
        <router-link to="/instagram">Instagram</router-link>
        (preferred),
        <router-link to="/discord">Discord</router-link>, or
        <router-link to="/linkedin">LinkedIn</router-link>.
        I will try to respond as soon as possible, however if you do not provide context in your message, I may not respond.
      </p>
    </section>
    <section>
      <h2>Business Inquiries</h2>
      <hr>
      <p>
        If you would like to get in contact with me for business inquiries, please send me an email at
        <a href="mailto:sammy.aknan@gmail.com">sammy.aknan@gmail.com</a> I will try my best to respond in a timely manner (within 48 hours).
      </p>
    </section>
  </BasicTextContent>
</template>

<style scoped>

</style>