export default {
  type: "object",
  properties: {
    quiz_id: { type: 'integer' },
    answers: [
      { answer: 'integer', answer_time: 'integer' }
    ]
  },
  required: ['quiz_id']
} as const;
