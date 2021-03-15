/* eslint-disable node/no-unsupported-features/es-syntax */
const {defaults: tsjPreset} = require('ts-jest/presets');

/**
 * Jest options
 *
 * @see https://jestjs.io/docs/configuration
 * @see https://github.com/kulshekhar/ts-jest
 * @see https://github.com/shelfio/jest-mongodb
 */
module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/build/'],
  preset: '@shelf/jest-mongodb',
  transform: {
    ...tsjPreset.transform,
  },
};
