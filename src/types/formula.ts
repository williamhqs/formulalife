export type FormulaVisual = 'count' | 'groups' | 'line' | 'area' | 'symbol';

export type Formula = {
  id: string;
  name: string;
  symbol: string;
  category: 'arithmetic' | 'algebra' | 'geometry' | 'statistics';
  level: number;
  description: string;
  examples: string[];
  visual?: FormulaVisual;
  dependsOn: string[];
};
