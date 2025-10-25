import { defineConfig } from "vite";
import * as path from "path";

import Vue from "@vitejs/plugin-vue";
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Vue({
            include: [/\.vue$/],
        }),
        mdPlugin({
            mode: [Mode.HTML, Mode.TOC, Mode.VUE],
        }),
    ],
});
