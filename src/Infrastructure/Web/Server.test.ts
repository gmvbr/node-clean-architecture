import pino from 'pino';
import {WebServer} from './Server';

describe('Web/Server', () => {
  test('listen()', async () => {
    const web = new WebServer(pino());
    await web.listen();

    expect(web.app).not.toBeUndefined();
    await web.app.close();
  });
});
