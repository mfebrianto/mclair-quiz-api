import 'source-map-support/register';

import { knex } from 'knex';
import knexfile from '../../../knexfile';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

import schema from './schema';
import Answer from 'src/models/answer';
import { score } from '@libs/calculate';
import Contestant from 'src/models/contestant';


const knexInstance = knex(knexfile);

const answers: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const body = JSON.parse(event.body.toString())

  console.log(body);

  const answerIds = await knexInstance<Answer>('answers')
  .insert(body.answers)
  .returning('id')

  const questions = await knexInstance<Answer>('questions')
  .whereIn('id', body.answers.map(answer => answer.question_id))

  const calculatedScore = score(body.answers, questions)

  console.log(body.answers[0])

  await knexInstance<Contestant>('contestants')
    .where('id', body.answers[0].participant_id)
    .update({
      score: calculatedScore
    })

  return formatJSONResponse({
    message: calculatedScore,
    event,
  });
}

export const main = answers;
