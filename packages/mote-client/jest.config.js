const baseConfig = require('../../config/jest')(require('./package.json'));
const localConfig = { ...baseConfig };

localConfig.moduleFileExtensions.push('vue');
localConfig.testEnvironment = 'jsdom';
localConfig.testURL = 'http://localhost';
localConfig.transform['^.+\\.vue$'] = 'vue-jest';

module.exports = localConfig;
