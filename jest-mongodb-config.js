/**
 * @shelf/jest-mongodb
 *
 * @see https://github.com/shelfio/jest-mongodb
 * @see https://github.com/nodkz/mongodb-memory-server
 */
module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.0.3',
      skipMD5: true,
    },
    autoStart: false,
    instance: {},
  },
};
