export type MathVisual =
  | 'count'
  | 'groups'
  | 'line'
  | 'area'
  | 'symbol'
  | 'fraction'
  | 'percent'
  | 'length'
  | 'remove'
  | 'volume'
  | 'multiply'
  | 'triangle'
  | 'root'
  | 'balance'
  | 'chance'
  | 'power'
  | 'ratio'
  | 'equation'
  | 'graph';

export type PhysicsVisual = 'motion' | 'force' | 'wave';

export type FormulaVisual = MathVisual | PhysicsVisual;

export type Domain = 'math' | 'physics' | 'chemistry' | 'biology';
export type MathCategory = 'arithmetic' | 'algebra' | 'geometry' | 'statistics';

export type Formula = {
  id: string;
  name: string;
  symbol: string;

  domain: Domain;
  category: string;

  level: number;
  description: string;
  examples: string[];

  visual?: FormulaVisual;
  dependsOn: string[];
};
