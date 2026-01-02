import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ball } from '@/components/Ball';

type MultiplyPlayProps = {
  groups: number;
  perGroup: number;
  onAddGroup?: () => void;
  onAddPerGroup?: () => void;
};

export function MultiplyPlay({ groups, perGroup, onAddGroup, onAddPerGroup }: MultiplyPlayProps) {
  return (
    <View style={styles.container}>
      {/* 显示球 */}
      <View style={styles.ballContainer}>
        {Array.from({ length: groups }).map((_, groupIndex) => (
          <View key={groupIndex} style={styles.groupRow}>
            {Array.from({ length: perGroup }).map((_, ballIndex) => (
              <Ball key={ballIndex} />
            ))}
          </View>
        ))}
      </View>

      {/* 公式 */}
      <Text style={styles.formulaText}>
        {groups} × {perGroup} = {groups * perGroup}
      </Text>

      {/* 操作按钮 */}
      <View style={styles.buttons}>
        {onAddGroup && (
          <TouchableOpacity style={styles.button} onPress={onAddGroup}>
            <Text style={styles.buttonText}>增加一组</Text>
          </TouchableOpacity>
        )}
        {onAddPerGroup && (
          <TouchableOpacity style={styles.button} onPress={onAddPerGroup}>
            <Text style={styles.buttonText}>每组加一个</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  ballContainer: {
    justifyContent: 'center',
  },
  groupRow: {
    flexDirection: 'row',
    marginVertical: 8, // 每组的间隔
    justifyContent: 'center',
  },
  formulaText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 16,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
