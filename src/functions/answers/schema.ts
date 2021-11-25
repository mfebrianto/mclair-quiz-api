export default {
    type: "object",
    properties: {
      answers: { type: [
          {
            participant_id: { type: 'integer' },
            question_id: { type: 'integer' },
            answer: { type: 'integer' },
            answer_time: { type: 'integer' }
          }
        ]
      }
    },
    required: ['answers']
  } as const;
  