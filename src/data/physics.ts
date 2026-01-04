import { Formula } from '../types/formula';

export const physicsFormulas: Formula[] = [
  {
    id: 'velocity',
    name: '速度',
    symbol: 'v = s / t',
    domain: 'physics',
    category: 'kinematics',
    level: 3,
    description: '物体单位时间内通过的路程。',
    examples: ['s=10m, t=2s → v=5m/s'],
    visual: 'motion',
    dependsOn: [],
  },
];
