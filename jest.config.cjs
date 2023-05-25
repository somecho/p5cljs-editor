/** @type {import('jest').Config} */
const config = {
  "transform": { 
    "^.+\\.jsx?$": "babel-jest" 
	},
    "transformIgnorePatterns": [ ],
	extensionsToTreatAsEsm: ['.jsx']
};

module.exports = config;
