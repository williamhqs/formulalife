// components/play/SubtractPlay.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { PlayProps } from '@/types/PlayComponent';
import { BallsAnimation } from '@/components/BallAnimation';

export function SubtractPlay({ state, setState, onAction }: PlayProps) {
  const initialCount = state.objects;
  const currentCount = state.objects;
  const delta = initialCount - currentCount;

  return (
    <View>
      <BallsAnimation
        initialCount={initialCount}
        currentCount={currentCount}
        primaryAction="REMOVE"
      />

      <Text style={styles.goalText}>目标：0</Text>
      <Text style={styles.formula}>
        {initialCount} - {delta} = {currentCount}
      </Text>

      <TouchableOpacity
        style={[styles.primaryBtn, currentCount <= 0 && { opacity: 0.6 }]}
        disabled={currentCount <= 0}
        onPress={() => onAction({ type: 'REMOVE', value: 1 })}>
        <Text style={styles.btnText}>{currentCount > 0 ? '减少一个' : '完成'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => setState({ objects: initialCount })}>
        <Text style={styles.btnText}>重新开始</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: '#3498db',
    padding: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 16,
  },
  secondaryBtn: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 12,
  },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  goalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 12,
  },
  formula: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 24,
  },
});
