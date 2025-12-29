// types/PlayComponent.ts
import { MathState } from '@/engine/core/MathState';
import { Action } from '@/engine/core/Action';

export type PlayProps = {
  state: MathState;
  setState: (state: MathState) => void;
  onAction: (action: Action) => void;
};
