import 'source-map-support/register';

import { knex } from 'knex';
import knexfile from '../../../knexfile';
import { formatJSONResponse } from '@libs/apiGateway';
import Quiz  from 'src/models/quiz';

const knexInstance = knex(knexfile);

const quizDetail = async (event) => {
  const quizzDetail = await knexInstance<Quiz>('quizzes')
    .join('questions', 'questions.quiz_id', 'quizzes.id')
    .select({
      name: 'quizzes.name',
      question: 'questions.question',
      image_url: 'questions.image_url',
      option_1: 'questions.option_1',
      option_2: 'questions.option_2',
      option_3: 'questions.option_3',
      option_4: 'questions.option_4',
      answer: 'questions.answer',
    })
    .andWhere('quizzes.id', event.pathParameters.id)

  return formatJSONResponse({
    message: quizzDetail,
  });
}

export const main = quizDetail;