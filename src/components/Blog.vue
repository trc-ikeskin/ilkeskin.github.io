<script setup>
const docs = Object.values(import.meta.glob("@/assets/docs/*.md", { eager: true, import: "attributes" }));
</script>

<template>
    <div class="blog-container">
        <div class="blog-card" v-for="doc in docs">
            <h2>{{ doc.title }}</h2>
            <img :src="doc.image" :alt="doc.title" />
            <p>{{ doc.description }}</p>
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

<style scoped>
.blog-container {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.blog-card {
    display: flex;
    flex-direction: column;
    border: 4px solid var(--fg-color);
    border-radius: 10px;
    padding: 1rem;
    width: 16rem;
    height: 25rem;
    box-sizing: border-box;
}

.blog-card:hover {
    border: 4px solid var(--alt-color);
    cursor: pointer;
}

.blog-card h2 {
    flex: 1;
    text-align: right;
    margin: 0;
}

.blog-card img {
    flex: 4;
    padding: 1rem;
    object-fit: contain;
    filter: grayscale();
}

.blog-card p {
    flex: 3;
    margin: 0;
    text-overflow: ellipsis;
}

.blog-card footer {
    flex: 2;
    display: flex;
    justify-content: space-around;
    margin-top: auto;
}

.blog-card footer a {
    text-decoration: underline dotted;
}
</style>
