import 'source-map-support/register';

import { knex } from 'knex';
import knexfile from '../../../knexfile';
import { formatJSONResponse } from '@libs/apiGateway';
import Quiz  from 'src/models/quiz';
import { middyfy } from '@libs/lambda';

const knexInstance = knex(knexfile);

const quizDetail = async (event) => {
  const quizzDetail = await knexInstance<Quiz>('quizzes').where('id', event.pathParameters.id).first();

  return formatJSONResponse({
    message: quizzDetail,
  });
}

export const main = middyfy(quizDetail);