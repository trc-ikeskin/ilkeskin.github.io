<script setup>
import Logo from "./components/Logo.vue";
import VerticalLine from "./components/VerticalLine.vue";
import Social from "./components/Socials.vue";
</script>

<template>
  <Logo />
  <VerticalLine />
  <Social :socials="socials" />
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          text: "LinkedIn",
          icon: "linkedin",
          link: "https://de.linkedin.com/in/ilyas-keskin-6697a518a",
        },
        {
          text: "Xing",
          icon: "square-xing",
          link: "https://www.xing.com/profile/Ilyas_Keskin3",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
