import type { Verdict } from '@/types';
import type { AnswerValidator } from './answer-validator';

export class CodeCompletionAnswerValidator implements AnswerValidator {
  validate(answer: unknown, correctAnswer: unknown): Verdict {
    if (!Array.isArray(correctAnswer) || !correctAnswer.every((item) => typeof item === 'string')) {
      throw new TypeError('Code completion correctAnswer must be string[]');
    }

    if (
      typeof answer !== 'object' ||
      answer === null ||
      !('values' in answer) ||
      !Array.isArray(answer.values) ||
      !answer.values.every((item) => typeof item === 'string')
    ) {
      throw new TypeError('Invalid code completion answer');
    }

    const normalizedUser = answer.values.map((item) => item.trim().toLowerCase());
    const normalizedCorrect = correctAnswer.map((item) => item.trim().toLowerCase());

    const isCorrect =
      normalizedUser.length === normalizedCorrect.length &&
      normalizedUser.every((item, index) => item === normalizedCorrect[index]);

    return {
      isCorrect,
      explanation: isCorrect ? 'Correct answer' : 'Incorrect answer',
      xpEarned: isCorrect ? 10 : 0,
      streakUpdated: isCorrect,
    };
  }
}
