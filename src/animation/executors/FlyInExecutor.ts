import { withTiming, Easing } from 'react-native-reanimated';

export class FlyInExecutor {
  static execute(animationValue: any, duration: number = 500) {
    animationValue.value = withTiming(0, { duration, easing: Easing.ease });
  }
}
