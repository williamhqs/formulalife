import { Action } from '../core/Action';
import { FormulaRule } from '../core/FormulaRule';
import { MathState } from '../core/MathState';

function isAddGroup(action: Action): action is { type: 'ADD_GROUP'; size: number } {
  return action.type === 'ADD_GROUP';
}

export const MultiplyRule: FormulaRule = {
  canApply: (_, action) => action.type === 'ADD_GROUP',

  apply: (state: MathState, action: Action): MathState => {
    if (!isAddGroup(action)) return state;

    const newGroup = Array(action.size).fill(1);

    const groups = state.groups ? [...state.groups, newGroup] : [newGroup];
    const groupCount = groups.length;
    const groupSize = action.size;

    return {
      groups,
      objects: groups.reduce((sum, g) => sum + g.length, 0),
      operands: [groupCount, groupSize],
      result: groupCount * groupSize,
    };
  },

  toFormula: (s) => (s.operands ? `${s.operands[0]} × ${s.operands[1]} = ${s.result}` : ''),
};
