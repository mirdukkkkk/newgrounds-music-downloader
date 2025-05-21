import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import alias from "@rollup/plugin-alias";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        alias({
            entries: [
                {
                    find: "@components",
                    replacement: resolve(import.meta.dirname, "/src/components")
                },
                {
                    find: "@constants",
                    replacement: resolve(import.meta.dirname, "/src/constants")
                },
                {
                    find: "@core",
                    replacement: resolve(import.meta.dirname, "/src/core")
                }
            ]
        }),
        preact()
    ]
});
