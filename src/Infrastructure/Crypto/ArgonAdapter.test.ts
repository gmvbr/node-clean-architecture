import {ArgonAdapter} from './ArgonAdapter';

describe('Crypto/ArgonAdapter', () => {
  test('test hash()', async () => {
    const adapter = new ArgonAdapter();

    const hash = await adapter.hash('secret');
    expect(hash).not.toBeUndefined();
  });

  test('test verify()', async () => {
    const adapter = new ArgonAdapter();

    const hash = await adapter.hash('secret');
    expect(hash).not.toBeUndefined();

    const correctPassword = await adapter.verify('secret', hash);
    expect(correctPassword).toBeTruthy();

    const incorrectPassword = await adapter.verify('invalid secret', hash);
    expect(incorrectPassword).toBeFalsy();
  });
});
