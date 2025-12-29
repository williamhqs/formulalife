import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

export type BallVariant = 'static' | 'add' | 'remove';

type Props = {
  variant?: BallVariant;
};

export function Ball({ variant = 'static' }: Props) {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    switch (variant) {
      /** ➕ 加法：从上方掉下来 */
      case 'add':
        translateY.value = -80;
        opacity.value = 0;
        translateY.value = withSpring(0, {
          damping: 10,
          stiffness: 120,
        });
        opacity.value = withTiming(1, { duration: 300 });
        break;

      /** ➖ 减法：缩小 + 淡出 */
      case 'remove':
        scale.value = withTiming(0, {
          duration: 300,
          easing: Easing.inOut(Easing.ease),
        });
        opacity.value = withTiming(0, { duration: 300 });
        break;

      /** 初始静态 */
      case 'static':
      default:
        break;
    }
  }, [variant]);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.ball, style]} />;
}

const styles = StyleSheet.create({
  ball: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3498db',
    margin: 6,
  },
});
