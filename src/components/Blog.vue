<script setup>
const docs = Object.values(import.meta.glob("@/assets/docs/*.md", { eager: true, import: "attributes" }));
</script>

<template>
    <div v-for="doc in docs">
        <header class="blog-card-header">
            <h2>{{ doc.title }}</h2>
        </header>
        <div class="blog-card-body">
            <img :src="image" :alt="title" />
            <p>{{ text }}</p>
        </div>
        <footer v-for="tag in doc.tags" class="blog-card-footer">
            <pre>{{ tag }}</pre>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Blog",
};
</script>

<style></style>
