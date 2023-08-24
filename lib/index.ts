
/**
 * Configure and returns Qstash API client
 * @param clientId 
 * @param clientSecret 
 * @see https://apicenter.estaleiro.serpro.gov.br/documentacao/consulta-cpf/pt/quick_start/#1-primeiro-passo-obtenha-consumer-key-e-consumer-secret
 */

import { QStashAPIV1 } from './generated/v1';
import { QStashAPIV2 } from './generated/v2';

export const qstashV1 = async (token: string): Promise<QStashAPIV1> => {
  const client = new QStashAPIV1({ TOKEN: token });
  return client;
};

export const qstashV2 = async (token: string): Promise<QStashAPIV2> => {
  const client = new QStashAPIV2({ TOKEN: token });
  return client;
};

export * as v1 from './generated/v1';
export * as v2 from './generated/v2';
