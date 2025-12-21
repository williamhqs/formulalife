import { Action } from './Action';
import { FormulaRule } from './FormulaRule';
import { MathState } from './MathState';

// engine/core/Engine.ts
export class FormulaEngine {
  constructor(private rule: FormulaRule) {}

  applyAction(state: MathState, action: Action): MathState {
    if (!this.rule.canApply(state, action)) return state;
    return this.rule.apply(state, action);
  }

  toFormula(state: MathState): string | null {
    if (!state.result) return null;
    return this.rule.toFormula(state);
  }
}
