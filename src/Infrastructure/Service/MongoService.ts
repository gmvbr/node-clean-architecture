import {Db, MongoClient} from 'mongodb';
import {Logger} from 'pino';

export class MongoService {
  public database?: Db;
  public client?: MongoClient;

  public validateEnvironment() {
    if (typeof process.env.MONGO_URL !== 'string') {
      throw new Error('Missing env "MONGO_URL"');
    }
  }

  public async initialize(logger: Logger) {
    this.validateEnvironment();

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    this.client = await MongoClient.connect(process.env.MONGO_URL!, options);
    logger.info(`[MongoService] isConnected: ${this.client.isConnected()}`);

    this.database = this.client.db(process.env.MONGO_DATABASE);
    logger.info(`[MongoService] database: ${this.database.databaseName}`);
  }
}
