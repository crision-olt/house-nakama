export default [
	"admin-frontend",
	"admin-backend",
	"shared",
	"shared-ui",
	{
		// add "extends" to merge two configs together
		extends: "./vite.config.js",
		test: {
			include: ["**/*.test.{ts,js}"],
			name: "happy-dom",
			environment: "happy-dom",
			globals: true,
		},
	},
];
