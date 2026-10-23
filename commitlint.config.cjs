module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// Default 100 chars forces awkward manual wrapping in commit bodies
		'body-max-line-length': [0],
	},
}
