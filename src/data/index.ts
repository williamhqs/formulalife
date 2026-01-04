import { Domain, Formula } from '@/types/formula';
import { mathFormulas } from './math';
import { physicsFormulas } from './physics';

export const allFormulas = [...mathFormulas, ...physicsFormulas];

/**
 * 按学科分组（UI / 统计 / Tab 用）
 */
export const formulasByDomain: Record<Domain, Formula[]> = {
  math: mathFormulas,
  physics: physicsFormulas,
  chemistry: [],
  biology: [],
};

export const getFormulasByDomain = (domain: Domain): Formula[] => formulasByDomain[domain];

export const getFormulasByCategory = (domain: Domain, category: string): Formula[] =>
  allFormulas.filter((f) => f.domain === domain && f.category === category);

export const getFormulaById = (id: string): Formula | undefined =>
  allFormulas.find((f) => f.id === id);
