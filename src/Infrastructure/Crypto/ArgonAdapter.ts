import {hash, verify} from 'argon2';
import {SecretKeyHash} from '../../Data';

/**
 * Adaptador SecretKeyHash
 */
export class ArgonAdapter implements SecretKeyHash {
  /**
   * [SecretKeyHash.hash]
   */
  public async hash(password: string): Promise<string> {
    const result = await hash(password);
    return result;
  }

  /**
   * [SecretKeyHash.verify]
   */
  public async verify(password: string, hash: string): Promise<boolean> {
    const result = await verify(hash, password);
    return result;
  }
}
