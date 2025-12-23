export type Lesson = {
  id: string;
  title: string;

  concept: ConceptPhase;
  play: PlayPhase;
  check: CheckPhase;
};

export type ConceptPhase = {
  narration?: string;
  initial: number;
  add: number;
};

export type PlayPhase = {
  initial: number;
  max: number;
  actions: ActionType[];
};

export type CheckPhase = {
  target: number;
  successText?: string;
};

export type ActionType = 'ADD' | 'REMOVE';
