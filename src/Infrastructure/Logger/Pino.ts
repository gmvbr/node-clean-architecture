import pino from 'pino';

export let logger: pino.Logger;

/**
 * Inicializa o logger
 */
export default async () => {
  logger = pino({
    prettyPrint: {},
    prettifier: require('pino-colada'),
  });
};
