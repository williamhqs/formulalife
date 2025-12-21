export type AnimationCommand =
  | { type: 'FLY_IN'; count: number }
  | { type: 'FLY_OUT'; count: number };
