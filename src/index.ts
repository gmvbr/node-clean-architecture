import Pino from './Infrastructure/Logger/Pino';

async function main() {
  try {
    await Pino();
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
}

main();
