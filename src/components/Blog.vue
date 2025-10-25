<script setup>
const docs = Object.values(import.meta.glob("@/assets/docs/*.md", { eager: true, import: "attributes" }));
</script>

<template>
    <div class="blog-container">
        <div class="blog-card" v-for="doc in docs">
            <hgroup>
                <a :href="link">
                    <i><FontAwesomeIcon :icon="['fab', 'opensuse']" /></i>
                    <h2>{{ doc.title }}</h2>
                </a>
                <p>{{ doc.description }}</p>
            </hgroup>
            <div>
                <img :src="doc.image" :alt="doc.title" />
            </div>
            <footer>
                <a v-for="tag in doc.tags">{{ tag }}</a>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "Blog",
};
</script>

<style></style>
