import 'source-map-support/register';

import { knex } from 'knex';
import knexfile from '../../../knexfile';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

import schema from './schema';
import Contestant from 'src/models/contestant';
import Answer from 'src/models/answer';

const knexInstance = knex(knexfile);

const answers: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const body = JSON.parse(event.body.toString())

  console.log(body);

  body.answers.forEach(element => {
    console.log(element.question_id);
  });


  return formatJSONResponse({
    message: 'test',
    event,
  });
}

export const main = answers;
