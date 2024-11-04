import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "happy-dom"
	},
	plugins: [
		AutoImport({
			imports: ["vitest"],
		}),
	],
});
