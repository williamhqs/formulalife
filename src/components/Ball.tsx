// components/Ball.tsx
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

type Props = {
  animated?: boolean;
};

export function Ball({ animated }: Props) {
  const translateY = useSharedValue(animated ? -100 : 0); // 弹性落下
  const opacity = useSharedValue(animated ? 0 : 1);

  useEffect(() => {
    if (animated) {
      // 弹性落地
      translateY.value = withSpring(0, { damping: 8, stiffness: 120 });
      // 渐显
      opacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
    }
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
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
