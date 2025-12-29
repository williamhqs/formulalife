// engine/core/Action.ts

export type Action =
  | { type: 'ADD'; value: number }
  | { type: 'REMOVE'; value: number }
  | { type: 'RESET' };
