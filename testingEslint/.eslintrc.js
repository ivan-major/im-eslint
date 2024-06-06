/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@nuxt/eslint-config',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		// TODO: error || off
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',

		/* https://eslint.vuejs.org/rules/attributes-order.html#vue-attributes-order */
		'vue/attributes-order': [
			'error',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
				alphabetical: false,
			},
		],

		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			},
		],

		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'never',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],

		'vue/html-indent': [
			'error',
			4,
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],

		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				registeredComponentsOnly: true,
			},
		],

		'vue/no-irregular-whitespace': [
			'error',
			{
				skipStrings: true,
				skipComments: false,
				skipRegExps: false,
				skipTemplates: false,
				skipHTMLAttributeValues: false,
				skipHTMLTextContents: false,
			},
		],

		'vue/component-definition-name-casing': ['error', 'PascalCase'],

		'vue/match-component-file-name': [
			'error',
			{
				extensions: ['vue'],
				shouldMatchCase: false,
			},
		],

		'vue/no-dupe-keys': [
			'error',
			{
				groups: [],
			},
		],

		/* https://eslint.vuejs.org/rules/order-in-components.html#vue-order-in-components */
		'vue/order-in-components': [
			'error',
			{
				order: [
					'el',
					'name',
					'key',
					'parent',
					'functional',
					['delimiters', 'comments'],
					['components', 'directives', 'filters'],
					'extends',
					'mixins',
					['provide', 'inject'],
					'ROUTER_GUARDS',
					'layout',
					'middleware',
					'validate',
					'scrollToTop',
					'transition',
					'loading',
					'inheritAttrs',
					'model',
					['props', 'propsData'],
					'emits',
					'setup',
					'asyncData',
					'data',
					'fetch',
					'head',
					'computed',
					'watch',
					'watchQuery',
					'LIFECYCLE_HOOKS',
					'methods',
					['template', 'render'],
					'renderError',
				],
			},
		],

		'comma-dangle': [
			'error',
			{
				arrays: 'only-multiline',
				objects: 'only-multiline',
				imports: 'only-multiline',
				exports: 'only-multiline',
				functions: 'only-multiline',
			},
		],

		// 'max-len': ['error', { code: 120 }],
	},
}
