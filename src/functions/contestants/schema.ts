export default {
  type: "object",
  properties: {
    quiz_id: { type: 'integer' }
  },
  required: ['quiz_id']
} as const;
