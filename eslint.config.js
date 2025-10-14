// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const importPlugin = require("eslint-plugin-import");
const prettierConfig = require("eslint-config-prettier/flat");

module.exports = tseslint.config(
	{
		files: ["**/*.ts"],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
			importPlugin.flatConfigs.recommended,
			prettierConfig,
		],
		processor: angular.processInlineTemplates,
		rules: {
			"@angular-eslint/directive-selector": [
				"error",
				{ type: "attribute", prefix: "app", style: "camelCase" },
			],
			"@angular-eslint/component-selector": [
				"error",
				{ type: "element", prefix: "app", style: "kebab-case" },
			],
			"@typescript-eslint/no-explicit-any": "error",
			"import/no-unresolved": "off",
			"import/named": "off",
		},
	},
	{
		files: ["**/*.html"],
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility,
		],
		rules: {},
	},
);
