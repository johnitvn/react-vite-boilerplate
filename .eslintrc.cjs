/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	root: true,
	plugins: ['jsx-a11y'],
	extends: ['standard', 'standard-jsx', 'standard-react'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			typescript: {
				project: 'tsconfig.json',
			},
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'no-undef': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-pascal-case': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'off',
			{
				ignoreRestSiblings: true,
			},
		],
	},
};
