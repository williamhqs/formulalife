// gradesData.ts

export type Question = {
  id: string;
  text: string;
  answer?: any;
};

export type Lesson = {
  id: string;
  title: string;
  concept: { content: string };
  play: { type: 'animation' | 'interaction'; data?: any };
  check: { questions: Question[] };
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Subject = {
  id: string;
  name: string;
  modules: Module[];
};

export type Grade = {
  id: string;
  name: string;
  subjects: Subject[];
};

export const grades: Grade[] = [
  {
    id: 'g1',
    name: '一年级',
    subjects: [
      {
        id: 'math',
        name: '数学',
        modules: [
          {
            id: 'm1',
            title: '数与运算',
            lessons: [
              {
                id: 'l1',
                title: '加法',
                concept: { content: '加法是将两个数合并得到一个新的数...' },
                play: { type: 'animation', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '2 + 3 = ?', answer: 5 }] },
              },
              {
                id: 'l2',
                title: '减法',
                concept: { content: '减法是从一个数中去掉另一个数...' },
                play: { type: 'animation', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '5 - 2 = ?', answer: 3 }] },
              },
            ],
          },
          {
            id: 'm2',
            title: '比较与关系',
            lessons: [
              {
                id: 'l3',
                title: '大小比较',
                concept: { content: '学习比较两个数的大小...' },
                play: { type: 'interaction', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '哪个更大？3 或 5', answer: 5 }] },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'g2',
    name: '二年级',
    subjects: [
      {
        id: 'math',
        name: '数学',
        modules: [
          {
            id: 'm1',
            title: '乘法与除法',
            lessons: [
              {
                id: 'l1',
                title: '乘法',
                concept: { content: '乘法是重复加法的简便方法...' },
                play: { type: 'animation', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '3 × 4 = ?', answer: 12 }] },
              },
              {
                id: 'l2',
                title: '除法',
                concept: { content: '除法是将一个数平均分成若干份...' },
                play: { type: 'animation', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '12 ÷ 4 = ?', answer: 3 }] },
              },
            ],
          },
          {
            id: 'm2',
            title: '几何基础',
            lessons: [
              {
                id: 'l3',
                title: '认识图形',
                concept: { content: '学习认识各种基本图形...' },
                play: { type: 'interaction', data: {} },
                check: { questions: [{ id: 'q1', text: '下列哪个是正方形？', answer: 'square' }] },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'g3',
    name: '三年级',
    subjects: [
      {
        id: 'math',
        name: '数学',
        modules: [
          {
            id: 'm1',
            title: '分数',
            lessons: [
              {
                id: 'l1',
                title: '分数概念',
                concept: { content: '分数表示整体的一部分...' },
                play: { type: 'animation', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '1/2 + 1/2 = ?', answer: 1 }] },
              },
            ],
          },
          {
            id: 'm2',
            title: '图形',
            lessons: [
              {
                id: 'l2',
                title: '图形面积',
                concept: { content: '学习计算矩形、正方形等图形的面积...' },
                play: { type: 'interaction', data: {} },
                check: { questions: [{ id: 'q1', text: '面积是多少？', answer: 12 }] },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'g4',
    name: '四年级',
    subjects: [
      {
        id: 'math',
        name: '数学',
        modules: [
          {
            id: 'm1',
            title: '小数与分数',
            lessons: [
              {
                id: 'l1',
                title: '小数加减法',
                concept: { content: '小数加减法是对小数进行加减计算...' },
                play: { type: 'animation', data: { max: 10 } },
                check: { questions: [{ id: 'q1', text: '1.2 + 3.4 = ?', answer: 4.6 }] },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'g5',
    name: '五年级',
    subjects: [
      {
        id: 'math',
        name: '数学',
        modules: [
          {
            id: 'm1',
            title: '代数',
            lessons: [
              {
                id: 'l1',
                title: '简单方程',
                concept: { content: '代数表达式和方程基础...' },
                play: { type: 'interaction', data: {} },
                check: { questions: [{ id: 'q1', text: 'x + 3 = 5, x = ?', answer: 2 }] },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'g6',
    name: '六年级',
    subjects: [
      {
        id: 'math',
        name: '数学',
        modules: [
          {
            id: 'm1',
            title: '几何与代数',
            lessons: [
              {
                id: 'l1',
                title: '平面几何',
                concept: { content: '学习各种几何图形和性质...' },
                play: { type: 'animation', data: {} },
                check: { questions: [{ id: 'q1', text: '三角形内角和？', answer: 180 }] },
              },
            ],
          },
        ],
      },
    ],
  },
];
