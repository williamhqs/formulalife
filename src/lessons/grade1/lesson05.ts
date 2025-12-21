// lessons/grade1/lesson05.ts
import { AddRule } from '../../engine/rules/AddRule';

export const lesson05 = {
  id: 'g1-l05',
  title: '合在一起',
  initialState: { objects: 3 },
  rule: AddRule,
  allowedActions: ['ADD'],
  max: 10,
};
