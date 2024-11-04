export default [
	"admin-frontend",
	"admin-backend",
	"shared",
	"shared-ui",
	{
		// add "extends" to merge two configs together
		extends: "./vite.config.js",
		test: {
			include: ["**/*.test.{ts,tsx}"],
			environment: "happy-dom",
			globals: true,
		},
	},
];
