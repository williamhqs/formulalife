import { Formula } from '@/types/formula';

export const physicsFormulas: Formula[] = [
  /* =========================
     基础运动（小学）
  ========================= */

  {
    id: 'speed',
    name: '速度',
    symbol: 'v = s / t',
    domain: 'physics',
    category: 'kinematics',
    level: 1,
    description: '物体单位时间内通过的路程。',
    examples: ['s=10m, t=2s → v=5m/s'],
    visual: 'motion',
    dependsOn: [],
  },

  {
    id: 'distance',
    name: '路程',
    symbol: 's = v × t',
    domain: 'physics',
    category: 'kinematics',
    level: 1,
    description: '速度与时间的乘积。',
    examples: ['v=3m/s, t=4s → s=12m'],
    visual: 'motion',
    dependsOn: ['speed'],
  },

  {
    id: 'time',
    name: '时间',
    symbol: 't = s / v',
    domain: 'physics',
    category: 'kinematics',
    level: 1,
    description: '路程除以速度。',
    examples: ['s=20m, v=5m/s → t=4s'],
    visual: 'motion',
    dependsOn: ['speed'],
  },

  {
    id: 'density',
    name: '密度',
    symbol: 'ρ = m / V',
    domain: 'physics',
    category: 'matter',
    level: 2,
    description: '单位体积内物质的质量。',
    examples: ['m=10kg, V=2m³ → ρ=5kg/m³'],
    visual: 'matter',
    dependsOn: [],
  },

  /* =========================
     力学基础（初中）
  ========================= */

  {
    id: 'acceleration',
    name: '加速度',
    symbol: 'a = Δv / t',
    domain: 'physics',
    category: 'kinematics',
    level: 2,
    description: '速度变化快慢的物理量。',
    examples: ['Δv=10m/s, t=2s → a=5m/s²'],
    visual: 'motion',
    dependsOn: ['speed'],
  },

  {
    id: 'newton_second_law',
    name: '牛顿第二定律',
    symbol: 'F = ma',
    domain: 'physics',
    category: 'dynamics',
    level: 3,
    description: '力与加速度成正比。',
    examples: ['m=2kg, a=3 → F=6N'],
    visual: 'force',
    dependsOn: ['acceleration'],
  },

  {
    id: 'pressure',
    name: '压强',
    symbol: 'p = F / S',
    domain: 'physics',
    category: 'mechanics',
    level: 2,
    description: '单位面积上受到的压力。',
    examples: ['F=100N, S=10m² → p=10Pa'],
    visual: 'pressure',
    dependsOn: ['newton_second_law'],
  },

  {
    id: 'work',
    name: '功',
    symbol: 'W = F × s',
    domain: 'physics',
    category: 'energy',
    level: 2,
    description: '力在位移方向上的作用效果。',
    examples: ['F=10N, s=5m → W=50J'],
    visual: 'energy',
    dependsOn: ['newton_second_law'],
  },

  {
    id: 'power',
    name: '功率',
    symbol: 'P = W / t',
    domain: 'physics',
    category: 'energy',
    level: 2,
    description: '单位时间内完成的功。',
    examples: ['W=100J, t=10s → P=10W'],
    visual: 'energy',
    dependsOn: ['work'],
  },

  {
    id: 'ohms_law',
    name: '欧姆定律',
    symbol: 'U = IR',
    domain: 'physics',
    category: 'electricity',
    level: 3,
    description: '电压、电流、电阻之间的关系。',
    examples: ['I=2A, R=5Ω → U=10V'],
    visual: 'circuit',
    dependsOn: [],
  },

  /* =========================
     高中核心物理
  ========================= */

  {
    id: 'uniform_acceleration_distance',
    name: '匀加速位移公式',
    symbol: 's = vt + ½at²',
    domain: 'physics',
    category: 'kinematics',
    level: 3,
    description: '匀加速直线运动的位移计算公式。',
    examples: ['v=2, a=3, t=2 → s=10m'],
    visual: 'motion',
    dependsOn: ['acceleration'],
  },

  {
    id: 'kinetic_energy',
    name: '动能',
    symbol: 'Ek = ½mv²',
    domain: 'physics',
    category: 'energy',
    level: 3,
    description: '物体由于运动而具有的能量。',
    examples: ['m=2kg, v=3m/s → Ek=9J'],
    visual: 'energy',
    dependsOn: ['speed'],
  },

  {
    id: 'potential_energy',
    name: '重力势能',
    symbol: 'Ep = mgh',
    domain: 'physics',
    category: 'energy',
    level: 3,
    description: '物体由于高度而具有的能量。',
    examples: ['m=2kg, h=5m → Ep≈98J'],
    visual: 'energy',
    dependsOn: ['newton_second_law'],
  },

  {
    id: 'momentum',
    name: '动量',
    symbol: 'p = mv',
    domain: 'physics',
    category: 'dynamics',
    level: 3,
    description: '描述物体运动状态的物理量。',
    examples: ['m=2kg, v=4 → p=8kg·m/s'],
    visual: 'motion',
    dependsOn: ['speed'],
  },

  {
    id: 'ideal_gas_law',
    name: '理想气体状态方程',
    symbol: 'pV = nRT',
    domain: 'physics',
    category: 'thermodynamics',
    level: 4,
    description: '描述气体压强、体积和温度之间的关系。',
    examples: ['气体状态变化计算'],
    visual: 'gas',
    dependsOn: [],
  },

  {
    id: 'coulomb_law',
    name: '库仑定律',
    symbol: 'F = k·q₁q₂ / r²',
    domain: 'physics',
    category: 'electricity',
    level: 4,
    description: '点电荷之间的相互作用力。',
    examples: ['q₁=1C, q₂=1C'],
    visual: 'electric',
    dependsOn: [],
  },

  {
    id: 'wave_speed',
    name: '波速公式',
    symbol: 'v = λf',
    domain: 'physics',
    category: 'waves',
    level: 3,
    description: '波速、波长与频率的关系。',
    examples: ['λ=2m, f=5Hz → v=10m/s'],
    visual: 'wave',
    dependsOn: [],
  },
];
