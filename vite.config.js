import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    [
      "babel-plugin-styled-components",
      {
        displayName: true, // readable names in dev
        fileName: true, // include filename in the label
        ssr: true, // stable hashing across envs
        pure: true,
      },
    ],
  ],
});
