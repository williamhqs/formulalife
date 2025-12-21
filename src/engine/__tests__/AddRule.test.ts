import { AddRule } from '../rules/AddRule';
import { MathState } from '../core/MathState';
import { Action } from '../core/Action';

describe('AddRule', () => {
  test('canApply only ADD action', () => {
    expect(AddRule.canApply({ objects: 3 }, { type: 'ADD', value: 2 })).toBe(true);

    expect(AddRule.canApply({ objects: 3 }, { type: 'REMOVE', value: 1 })).toBe(false);
  });

  test('apply should increase objects correctly', () => {
    const state: MathState = { objects: 3 };
    const next = AddRule.apply(state, { type: 'ADD', value: 2 });

    expect(next.objects).toBe(5);
    expect(next.operands).toEqual([3, 2]);
    expect(next.result).toBe(5);
  });

  test('toFormula should generate correct formula string', () => {
    const state: MathState = {
      objects: 5,
      operands: [3, 2],
      result: 5,
    };

    expect(AddRule.toFormula(state)).toBe('3 + 2 = 5');
  });
  test('apply should return the same state for RESET', () => {
    const state: MathState = { objects: 3 };
    const action: Action = { type: 'RESET' };
    const next = AddRule.apply(state, action);

    expect(next).toBe(state); // 应该返回原状态
  });
});
