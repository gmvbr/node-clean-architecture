import {logger, initLogger} from './Infrastructure/Logger/Pino';
import {MongoService} from './Infrastructure/Service/MongoService';
import {WebServer} from './Infrastructure/Web/Server';

async function main() {
  try {
    await initLogger();

    const mongoService = new MongoService();
    await mongoService.initialize(logger);

    const webServer = new WebServer(logger);
    await webServer.listen();
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
}

main();
