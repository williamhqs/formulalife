// engine/rules/SubtractRule.ts
import { FormulaRule } from '../core/FormulaRule';
import { MathState } from '../core/MathState';
import { Action } from '../core/Action';

export const SubtractRule: FormulaRule = {
  canApply: (_, action) => action.type === 'REMOVE',

  apply: (state: MathState, action: Action): MathState => ({
    objects: state.objects - action.value, // 执行减法
    operands: [state.objects, action.value],
    result: state.objects - action.value,
  }),

  toFormula: (s) => `${s.operands?.[0]} - ${s.operands?.[1]} = ${s.result}`,
};
