<template>
  <div style="flex-direction: column">
    <ul>
      <li v-for="{ icon, link, text } in socials">
        <a :href="link">
          {{ text }} <font-awesome-icon :icon="'fa-brands fa-' + icon" />
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

li {
  text-align: end;
}
</style>
