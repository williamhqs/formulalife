export interface Formula {
  id: string;
  title: string;
  latex: string;
  description: string;
  instructions?: string;
}

export const formulas: Formula[] = [
  {
    id: '1',
    title: 'Quadratic Formula',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description: 'The quadratic formula solves ax^2 + bx + c = 0.',
    instructions: 'Plug a, b, c values into the formula to get two solutions.',
  },
  {
    id: '2',
    title: "Einstein's Mass-Energy Equivalence",
    latex: 'E = mc^2',
    description: 'Mass and energy are equivalent; c = speed of light.',
  },
  {
    id: '3',
    title: 'Pythagoras Theorem',
    latex: 'a^2 + b^2 = c^2',
    description: 'Relates the sides of a right triangle.',
  },
];
