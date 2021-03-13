import pino from 'pino';

export let logger: pino.Logger;

export async function initLogger() {
  logger = pino({
    prettyPrint: {},
    prettifier: require('pino-colada'),
  });
}
