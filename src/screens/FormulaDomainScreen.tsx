import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader';

type Domain = {
  id: string;
  name: string;
  color: string; // 用于卡片颜色
  icon?: string; // 可选图标
};

const domains: Domain[] = [
  { id: 'math', name: '数学', color: '#3498db' },
  { id: 'physics', name: '物理', color: '#e67e22' },
  { id: 'chemistry', name: '化学', color: '#9b59b6' },
  { id: 'biology', name: '生物', color: '#2ecc71' },
];

export function FormulaDomainScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title="公式分类" />

      <FlatList
        data={domains}
        keyExtractor={(item) => item.id}
        numColumns={2} // 双列
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.card, { backgroundColor: item.color + '20' }]} // 半透明背景
            onPress={() => navigation.navigate('FormulaListScreen', { domain: item.id })}>
            {/* 圆形色块 */}
            <View style={[styles.circle, { backgroundColor: item.color }]} />

            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
});
