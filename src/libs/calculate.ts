import 'source-map-support/register';

export const score = (answers, questions): number => {
  var score = 0

  answers.forEach(answer => {
    var question = questions.find(question => question.id == answer.question_id)
    if (answer.answer == question.answer ) {
      score += 100
      score = score - answer.answer_time
    }
  });

  return score
}
