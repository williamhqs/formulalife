// animation/commands/mapAction.ts
export function mapActionToCommands(action: Action): AnimationCommand[] {
  if (action.type === 'ADD') {
    return [{ type: 'FLY_IN', count: action.value }];
  }
  if (action.type === 'REMOVE') {
    return [{ type: 'FLY_OUT', count: action.value }];
  }
  return [];
}
