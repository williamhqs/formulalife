import { MathState } from '../core/MathState';
import { Action } from '../core/Action';

export interface FormulaRule {
  canApply(state: MathState, action: Action): boolean;
  apply(state: MathState, action: Action): MathState;
  toFormula(state: MathState): string;
}
