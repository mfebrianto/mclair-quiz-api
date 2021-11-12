import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';


const quizzes = async (event) => {
  return formatJSONResponse({
    message: 'test quizzes',
    event,
  });
}

export const main = quizzes;