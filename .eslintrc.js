module.exports = {
	env: {
		es2021: true,
		node: true,
		"jest/globals": true,
	},
	extends: ["eslint:recommended", "prettier"],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["jest"],
};
