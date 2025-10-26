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
    column-gap: 2rem;
}

.blog-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid var(--fg-color);
    border-radius: 5px;
    padding: 1rem;
    width: 40rem;
}

.blog-card img {
    height: 10em;
    width: 10em;
    object-fit: cover;
    filter: opacity(75%) blur(1px) saturate(0%);
}

.blog-card > hgroup {
    i {
        width: 10em;
    }

    h2 {
        margin: 0px auto;
        text-align: right;
    }
}

.blog-card footer {
    display: inline-flex;
    justify-content: space-around;

    a {
        text-decoration: underline;
        text-decoration-style: dotted;
    }
}
</style>
