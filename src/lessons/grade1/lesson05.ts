// lessons/grade1/lesson05.ts
import { AddRule } from '../../engine/rules/AddRule';

export const lesson05 = {
  /** 基础信息 */
  id: 'g1-math-add-01',
  grade: 1,
  subject: 'math',
  module: '数与运算',
  title: '合在一起',
  initialState: { objects: 3 },
  rule: AddRule,
  allowedActions: ['ADD'],
  max: 10,

  /** ① 概念讲解阶段 */
  concept: {
    title: '什么是加法？',
    description:
      '把两个数量合在一起，就叫做加法。\n\n一开始有 3 个球，每次再加 1 个，数量就会变多。',
    formula: '3 + 1 = 4',
  },

  /** ② 操作阶段（Play） */
  play: {
    initialState: {
      objects: 3, // 初始球数量
    },
    max: 10, // 最大可加到多少
    allowedActions: ['ADD'], // 当前 lesson 只允许 ADD
    rule: AddRule,
  },

  /** ③ 检查理解阶段（Check） */
  check: {
    question: '现在有 3 个球，再加 2 个，一共有多少个？',
    options: [4, 5, 6],
    answer: 5,
    explanation: '3 加 2 等于 5。',
  },
};
