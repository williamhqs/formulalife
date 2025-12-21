import { withTiming, Easing } from 'react-native-reanimated';

export class FlyOutExecutor {
  static execute(animationValue: any, duration: number = 500) {
    animationValue.value = withTiming(-200, { duration, easing: Easing.ease });
  }
}
