import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const body = JSON.parse(event.body.toString())

  return formatJSONResponse({
    message: `Hello ${body.name}, welcome to the exciting Serverless world!`,
    event,
  });
}

export const main = hello;
