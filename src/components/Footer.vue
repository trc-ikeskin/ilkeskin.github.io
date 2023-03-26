<template>
  <footer>
    <p>
      Hosted with <span>&#9829;</span> on
      <a href="https://pages.github.com/">GitHub Pages</a>
    </p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
footer {
  display: flex;
  place-content: center;
  width: 100%;
}

span {
  color: var(--alt-color);
}
</style>
