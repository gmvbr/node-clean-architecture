import Pino, {logger} from './Infrastructure/Logger/Pino';
import {WebServer} from './Infrastructure/Web/Server';

async function main() {
  try {
    await Pino();
    const server = new WebServer(logger);
    await server.listen();
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
}

main();
