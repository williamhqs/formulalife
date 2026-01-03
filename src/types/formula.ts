export type FormulaVisual = 'count' | 'groups' | 'line' | 'area' | 'symbol';

export type Domain = 'math' | 'physics' | 'chemistry' | 'biology';
export type MathCategory = 'arithmetic' | 'algebra' | 'geometry' | 'statistics';

export type Formula = {
  id: string;
  name: string;
  symbol: string;

  domain: Domain;
  category: MathCategory;

  level: number;
  description: string;
  examples: string[];

  visual?: FormulaVisual;
  dependsOn: string[];
};
