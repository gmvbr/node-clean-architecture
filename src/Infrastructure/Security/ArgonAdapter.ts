import {hash, verify} from 'argon2';
import {SecretProtocol} from '../../Application';

export class ArgonAdapter implements SecretProtocol {
  public async hash(password: string): Promise<string> {
    const result = await hash(password);
    return result;
  }

  public async verify(password: string, hash: string): Promise<boolean> {
    const result = await verify(hash, password);
    return result;
  }
}
