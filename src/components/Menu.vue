<template>
    <div style="flex-direction: column">
        <ul>
            <li v-for="{ icon, link, text } in items">
                <a :href="link">
                    <span>{{ text }}</span>
                    <i><FontAwesomeIcon :icon="[icon.family, icon.name]" /></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: {
        items:
            Array <
            Object >
            {
                text: String,
                icon: Object,
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

i {
    width: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 430px) {
    a {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: row-reverse;
        padding-left: 32px;
        /* align with text in logo */
    }
}
</style>
