<template>
  <div style="flex-direction: column">
    <ul>
      <li v-for="{ icon, link, text } in socials">
        <a :href="link">
          <span>{{ text }}</span>
          <font-awesome-icon :icon="'fa-brands fa-' + icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Socials",
  props: {
    socials:
      Array <
      Object >
      {
        text: String,
        icon: String,
        link: String,
      },
  },
};
</script>

<style scoped>
div {
  display: flex;
}

ul {
  font-size: 36px;
  list-style: none;
}

a {
  display: flex;
  align-items: center;
  justify-content: end;
}

span {
  padding-inline: 0.5rem;
}

@media (max-width: 430px) {
  a {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row-reverse;
    padding-left: 32px; /* align with text in logo */
  }
}
</style>
