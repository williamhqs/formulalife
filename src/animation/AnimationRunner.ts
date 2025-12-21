// animation/AnimationRunner.ts

import { AnimationCommand } from './commands/AnimationCommand';
// import { FlyinExecutor } from './executors/FlyinExecutor';
import { FlyInExecutor } from './executors/FlyInExecutor';
import { FlyOutExecutor } from './executors/FlyOutExecutor';

// Helper function to wrap the animation into a promise that resolves when the animation finishes
function animateWithPromise(executor: any, animationValue: any, duration: number) {
  return new Promise<void>((resolve) => {
    executor.execute(animationValue, duration);
    setTimeout(() => {
      resolve(); // Resolve the promise after animation completes
    }, duration);
  });
}

// This function runs each animation command sequentially
export async function runAnimation(commands: AnimationCommand[]): Promise<void> {
  for (const cmd of commands) {
    switch (cmd.type) {
      case 'FLY_IN':
        await animateWithPromise(FlyInExecutor, cmd.count, 500); // Wait for the "fly-in" animation
        break;

      case 'FLY_OUT':
        await animateWithPromise(FlyOutExecutor, cmd.count, 500); // Wait for the "fly-out" animation
        break;

      default:
        break;
    }
  }
}
