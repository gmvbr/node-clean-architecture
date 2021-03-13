import pino from 'pino';
import {WebServer} from './Server';

describe('Infrastructure->Web->Server.ts', () => {
  test('Inicializar e ligar o servidor', async () => {
    const web = new WebServer(pino());
    await web.listen();

    expect(web.app).not.toBeUndefined();
    await web.app.close();
  });
});
