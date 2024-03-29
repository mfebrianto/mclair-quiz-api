import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'answers',
        request: {
          schema: {
            'application/json': schema
          }
        },
        cors: true,
      }
    }
  ],
  iamRoleStatements: [
    {
      'Effect': 'Allow',
      'Action': ['ses:SendEmail'],
      'Resource': '*'
    }
  ],
}
