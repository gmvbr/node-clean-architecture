import {join} from 'path';
import {logger, initLogger} from './Pino';

describe('Logger/Pino', () => {
  test('initLogger()', async () => {
    expect(logger).toBeUndefined();
    await initLogger();
    const {dependencies} = require(join(process.cwd(), 'package.json'));
    expect(logger).not.toBeUndefined();
    expect(logger.version).toBe(dependencies.pino.substring(1));
  });
});
