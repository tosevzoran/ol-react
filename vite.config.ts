import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/"),
      name: "ol-react",
      fileName: (format) => `ol-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        sourcemap: true,
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
});
