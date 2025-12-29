import { AddRule } from './AddRule';
import { MultiplyRule } from './MultiplyRule';
import { SubtractRule } from './SubtractRule';

export const ruleMap: Record<string, any> = {
  ADD: AddRule,
  SUBTRACT: SubtractRule,
  MULTIPLY: MultiplyRule,
};
