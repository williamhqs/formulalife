// engine/types/EngineLesson.ts
export type EngineLesson = {
  id: string;
  title: string;
  rule: any;

  concept: {
    content?: string;
    description?: string;
    formula?: string;
  };

  play: {
    initialState: any;
    rule: any;
    allowedActions: string[];
    max?: number;
    min?: number;
  };

  check: {
    question: string;
    options?: any[];
    answer: any;
    explanation?: string;
  };
};
