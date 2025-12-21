// animation/commands/mapAction.ts
// animation/commands/mapAction.ts

import { AnimationCommand } from '../AnimationCommand';
import { Action } from '../../engine/core/Action';

export function mapActionToAnimationCommand(action: Action): AnimationCommand[] {
  switch (action.type) {
    case 'ADD':
      return [{ type: 'FLY_IN', count: action.value }];
    case 'RESET':
      return [{ type: 'FLY_OUT', count: 0 }];
    default:
      return [];
  }
}
