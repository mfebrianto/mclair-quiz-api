import 'source-map-support/register';

import { knex } from 'knex';
import knexfile from '../../../knexfile';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';

import schema from './schema';
import Contestant from 'src/models/contestant';
import Answer from 'src/models/answer';

const knexInstance = knex(knexfile);

const contestants: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const body = JSON.parse(event.body.toString())

  const isContestantExist = await knexInstance<Contestant>('contestants')
    .where({email: body.email})
    .andWhere({phone: body.phone})
    .andWhere({quiz_id: body.quiz_id})

  if (isContestantExist?.length > 0) {
    return formatJSONResponse({
      code: 1,
      message: 'you have entered this quiz. Thank you for participating'
    }, 500);
  }

  const contestantResultIds: Array<number> = await knexInstance<Contestant>('contestants')
    .insert({
      name: body.name,
      email: body.email,
      phone: body.phone,
      quiz_id: body.quiz_id
    })
    .returning('id')

  const answers = body.answers.map(answer => {
    answer.participant_id = contestantResultIds[0]
    return answer
  })

  const answerResultIds: Array<number>  = await knexInstance<Answer>('answers')
  .insert(answers)
  .returning('id')

  return formatJSONResponse({
    message: answerResultIds,
    event,
  });
}

export const main = contestants;
