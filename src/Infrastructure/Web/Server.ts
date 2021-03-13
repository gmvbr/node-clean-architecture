import fastify, {FastifyInstance} from 'fastify';
import {Logger} from 'pino';

/**
 * WebServer
 * Classe na infraestrutura responsável pelo servidor web
 *
 * ### Depedente
 * - Logger
 */
export class WebServer {
  public app: FastifyInstance;

  /**
   * Inicializa o WebServer
   *
   * -> Define a instância do fastify
   * -> Define os plugins usados
   */
  constructor(logger: Logger) {
    this.app = fastify({logger});
  }

  /**
   * Inicializa o Servidor
   *
   * - process.env.PORT, padrão 0
   * - process.env.HOST, padrão '0.0.0.0'
   *
   * @returns Promise<string>
   */
  public async listen() {
    const port = process.env.PORT || 0;
    const host = process.env.HOST || '0.0.0.0';

    return this.app.listen(port, host);
  }
}
