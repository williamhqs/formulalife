import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ball, BallVariant } from '@/components/Ball';

type Props = {
  initialCount: number;
  currentCount: number;
  primaryAction: 'ADD' | 'REMOVE';
};

export function BallsAnimation({ initialCount, currentCount, primaryAction }: Props) {
  const delta = currentCount - initialCount;
  const ballVariant: BallVariant = primaryAction === 'ADD' ? 'add' : 'remove';

  return (
    <View style={styles.ballContainer}>
      {/* 初始静态球 */}
      {Array.from({ length: initialCount }).map((_, i) => (
        <Ball key={`init-${i}`} variant="static" />
      ))}

      {/* 动态增减球 */}
      {Array.from({ length: Math.abs(delta) }).map((_, i) => (
        <Ball key={`delta-${i}`} variant={ballVariant} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ballContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
