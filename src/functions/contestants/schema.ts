export default {
  type: "object",
  properties: {
    quiz_id: { type: 'integer' },
    name: { type: 'string' },
    email: { type: 'string' },
    phone: { type: 'string' },
  },
  required: ['quiz_id', 'name', 'email', 'phone']
} as const;
