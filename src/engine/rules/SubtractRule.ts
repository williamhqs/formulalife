// engine/rules/SubtractRule.ts
import { FormulaRule } from '../core/FormulaRule';
import { MathState } from '../core/MathState';
import { Action } from '../core/Action';

export const SubtractRule: FormulaRule = {
  canApply: (_, action: Action) => action.type === 'REMOVE',

  apply: (state: MathState, action: Action): MathState => {
    if (action.type !== 'REMOVE') {
      return state;
    }
    return {
      objects: state.objects - action.value,
      operands: [state.objects, action.value],
      result: state.objects - action.value,
    };
  },

  toFormula: (s) => `${s.operands?.[0]} - ${s.operands?.[1]} = ${s.result}`,
};

// export const SubtractRule = {
//   apply(state: { objects: number }, action: { type: string; value: number }) {
//     if (action.type !== 'SUBTRACT') return state;
//     const newCount = Math.max(state.objects - action.value, 0);
//     return { ...state, objects: newCount };
//   }
// };
