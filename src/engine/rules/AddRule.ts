import { Action } from '../core/Action';
import { FormulaRule } from '../core/FormulaRule';
import { MathState } from '../core/MathState';

function isAdd(action: Action): action is { type: 'ADD'; value: number } {
  return action.type === 'ADD';
}

export const AddRule: FormulaRule = {
  canApply: (_, action: Action) => action.type === 'ADD',

  apply: (state: MathState, action: Action): MathState => {
    if (!isAdd(action)) {
      return state;
    }
    return {
      objects: state.objects + action.value,
      operands: [state.objects, action.value],
      result: state.objects + action.value,
    };
  },

  toFormula: (s) => `${s.operands?.[0]} + ${s.operands?.[1]} = ${s.result}`,
};
