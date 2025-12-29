import { AddRule } from './AddRule';
import { SubtractRule } from './SubtractRule';

export const ruleMap: Record<string, any> = {
  加法: AddRule,
  减法: SubtractRule,
};
