import { Domain, Formula } from '@/types/formula';
import { mathFormulas } from './math';
import { physicsFormulas } from './physics';
import { chemistryFormulas } from './chemistry';
import { biologyFormulas } from './biology';

export const allFormulas = [
  ...mathFormulas,
  ...physicsFormulas,
  ...chemistryFormulas,
  ...biologyFormulas,
];

/**
 * 按学科分组（UI / 统计 / Tab 用）
 */
export const formulasByDomain: Record<Domain, Formula[]> = {
  math: mathFormulas,
  physics: physicsFormulas,
  chemistry: chemistryFormulas,
  biology: biologyFormulas,
};

export const getFormulasByDomain = (domain: Domain): Formula[] => formulasByDomain[domain];

export const getFormulasByCategory = (domain: Domain, category: string): Formula[] =>
  allFormulas.filter((f) => f.domain === domain && f.category === category);

export const getFormulaById = (id: string): Formula | undefined =>
  allFormulas.find((f) => f.id === id);
