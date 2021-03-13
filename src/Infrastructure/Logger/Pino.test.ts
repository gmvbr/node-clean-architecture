import {join} from 'path';
import Pino, {logger} from './Pino';

describe('Infrastructure->Logger->Pino.ts', () => {
  test('Esperado inicialização do logger', async () => {
    expect(logger).toBeUndefined();
    await Pino();
    const {dependencies} = require(join(process.cwd(), 'package.json'));
    expect(logger).not.toBeUndefined();
    expect(logger.version).toBe(dependencies.pino.substring(1));
  });
});
