/**
 * Funções de hash para senha
 */
export interface SecretKeyHash {
  /**
   * Gera o hash com base na senha
   */
  hash: (password: string) => Promise<string>;
  /**
   * Verifica a senha com o hash
   */
  verify: (password: string, hash: string) => Promise<boolean>;
}
