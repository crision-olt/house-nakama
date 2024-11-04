import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "happy-dom",
		browser: {
			name: "chrome"
		}
	},
	plugins: [
		react(),
		AutoImport({
			imports: ["vitest"],
		}),
	],
});
