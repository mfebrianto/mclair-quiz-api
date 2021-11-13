import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import quizzes from '@functions/quizzes';
import quizDetail from '@functions/quiz_detail';

const serverlessConfiguration: AWS = {
  service: 'quiz-api',
  app: 'mclair',
  org: 'mfebrianto',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: {
        forceInclude: ['pg']
      }
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'ap-southeast-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello, quizzes, quizDetail},
};

module.exports = serverlessConfiguration;
