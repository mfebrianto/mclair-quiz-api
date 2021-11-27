export default {
    type: "object",
    properties: {
      answers: { 
        type: "array",
        items:
          {
            type: "object",
            properties: {
              participant_id: { type: 'integer' },
              question_id: { type: 'integer' },
              answer: { type: 'integer' },
              answer_time: { type: 'integer' }
            },
            required: ['participant_id','question_id','answer','answer_time']
          }
        }
    },
    required: ['answers']
  } as const;
  