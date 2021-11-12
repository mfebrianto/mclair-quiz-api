import 'source-map-support/register';

import { knex } from 'knex';
import knexfile from '../../../knexfile';
import { formatJSONResponse } from '@libs/apiGateway';
import Quiz  from 'src/models/quiz';

const knexInstance = knex(knexfile);


const quizzes = async (event) => {
  const quizzes = await knexInstance<Quiz>('quizzes');

  return formatJSONResponse({
    message: quizzes,
    event,
  });
}

export const main = quizzes;