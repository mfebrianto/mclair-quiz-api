export default {
  type: "object",
  properties: {
    quiz_id: { type: 'integer' },
    name: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
    answers: { type: [
        {
          answer: { type: 'integer' },
          answer_time: { type: 'integer' }
        }
      ]
    }
  },
  required: ['quiz_id', 'name', 'email', 'phone', 'answers']
} as const;
