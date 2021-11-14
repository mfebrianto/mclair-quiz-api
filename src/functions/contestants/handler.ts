import 'source-map-support/register';

// import { knex } from 'knex';
// import knexfile from '../../../knexfile';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

import schema from './schema';

const contestants: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.quiz_id}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const main = contestants;
