// engine/factory/createEngineLesson.ts
import { Lesson } from '../../lessons/gradesData';
import { ruleMap } from '../rules/index';
import { EngineLesson } from '../../types/EngineLesson';

export function createEngineLesson(lesson: Lesson): EngineLesson {
  const rule = ruleMap[lesson.intent ?? ''];

  if (!rule) {
    throw new Error(`No rule found for lesson: ${lesson.title}`);
  }

  switch (lesson.intent) {
    case 'ADD':
      return {
        id: lesson.id,
        title: lesson.title,
        rule,

        concept: {
          content: lesson.concept.content,
          description: lesson.concept.description,
          formula: lesson.concept.formula,
        },

        play: {
          initialState: { objects: 3 },
          rule,
          allowedActions: ['ADD'],
          max: lesson.play.data?.max,
        },

        check: {
          question: lesson.check.questions[0].text,
          answer: lesson.check.questions[0].answer,
          explanation: '试着用动画再做一遍。',
        },
      };
    case 'SUBTRACT':
      return {
        id: lesson.id,
        title: lesson.title,
        rule,

        concept: {
          content: lesson.concept.content,
          description: lesson.concept.description,
          formula: lesson.concept.formula,
        },

        play: {
          initialState: { objects: 5 },
          rule,
          allowedActions: ['ADD_GROUP', 'ADD_PER_GROUP'],
          min: lesson.play.data?.min,
        },

        check: {
          question: lesson.check.questions[0].text,
          answer: lesson.check.questions[0].answer,
          explanation: '试着用动画再做一遍。',
        },
      };
    case 'MULTIPLY':
      return {
        id: lesson.id,
        title: lesson.title,
        rule,
        concept: {
          content: lesson.concept.content,
          description: lesson.concept.description,
          formula: lesson.concept.formula,
        },

        play: {
          initialState: { objects: 5 },
          rule,
          allowedActions: ['MULTIPLY'],
          min: lesson.play.data?.min,
        },

        check: {
          question: lesson.check.questions[0].text,
          answer: lesson.check.questions[0].answer,
          explanation: '试着用动画再做一遍。',
        },
      };
    default:
      throw new Error(`Unsupported lesson intent: ${lesson.intent}`);
  }
}
