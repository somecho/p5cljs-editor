/** @type {import('jest').Config} */
const config = {
	"transform": {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.(md|mdx)$": "jest-transformer-mdx",
	},
	"transformIgnorePatterns": [],
};

module.exports = config;
