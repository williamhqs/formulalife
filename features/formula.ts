export const formulas = {
  speed: {
    title: 'Speed Formula',
    formula: 'Speed = Distance / Time',
    variables: {
      speed: 'Speed (m/s)',
      distance: 'Distance (m)',
      time: 'Time (s)',
    },
    explanation:
      'The speed of an object is calculated by dividing the distance it travels by the time it takes.',
    examples: [
      {
        question: 'A car travels 100 meters in 5 seconds. What is its speed?',
        steps: [
          'Use the formula: Speed = Distance / Time',
          'Insert values: Speed = 100 / 5',
          'Calculate: Speed = 20 m/s',
        ],
        answer: '20 m/s',
      },
    ],
  },
};
export default formulas;
