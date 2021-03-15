import pino from 'pino';
import {MongoService} from './MongoService';

describe('Service/MongoService', () => {
  test('validateEnvironment()', async () => {
    const MongoURL = process.env.MONGO_URL;

    const service = new MongoService();

    delete process.env.MONGO_URL;
    expect(() => service.validateEnvironment()).toThrowError(
      'Missing env "MONGO_URL"'
    );

    process.env.MONGO_URL = 'mongodb://localhost:27017/data';
    expect(() => service.validateEnvironment()).not.toThrow();

    process.env.MONGO_URL = MongoURL;
  });

  test('initialize()', async () => {
    const service = new MongoService();
    await service.initialize(pino());

    expect(service.client).not.toBeUndefined();
    expect(service.client?.isConnected).toBeTruthy();

    expect(service.database).not.toBeUndefined();
    expect(service.database?.databaseName).not.toBeNull();

    await service.client?.close();
  });
});
