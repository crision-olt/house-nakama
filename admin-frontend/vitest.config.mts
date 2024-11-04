import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "happy-dom",
		browser: {
			name: "chromium",
			enabled: true,
			provider: 'playwright',
			api: {
				port: 63315
			}
		}
	},
	plugins: [
		react(),
		AutoImport({
			imports: ["vitest"],
		}),
	],
});
