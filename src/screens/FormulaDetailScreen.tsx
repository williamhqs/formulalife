import ScreenHeader from '@/components/ScreenHeader';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function FormulaDetailScreen({ route }: any) {
  const { formula } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title="公式详情" />

      <ScrollView contentContainerStyle={styles.container}>
        {/* ===== 公式主卡片 ===== */}
        <View style={styles.card}>
          <Text style={styles.symbol}>{formula.symbol}</Text>
          <Text style={styles.name}>{formula.name}</Text>

          <View style={styles.meta}>
            <Text style={styles.metaText}>Lv {formula.level}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.metaText}>{formula.category}</Text>
          </View>
        </View>

        {/* ===== 解释 ===== */}
        <View style={styles.card}>
          <Text style={styles.section}>概念说明</Text>
          <Text style={styles.desc}>{formula.description}</Text>
        </View>

        {/* ===== 示例 ===== */}
        <View style={styles.card}>
          <Text style={styles.section}>示例</Text>
          {formula.examples.map((e: string, i: number) => (
            <View key={i} style={styles.exampleRow}>
              <Text style={styles.example}>{e}</Text>
            </View>
          ))}
        </View>

        {/* ===== 依赖 ===== */}
        {formula.dependsOn?.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.section}>前置知识</Text>
            <Text style={styles.depends}>{formula.dependsOn.join(' · ')}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },

  container: {
    padding: 16,
    paddingBottom: 32,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },

    elevation: 3,
  },

  symbol: {
    fontSize: 36,
    fontWeight: '600',
    color: '#1f2937',
    letterSpacing: 0.5,
  },

  name: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 6,
    color: '#374151',
  },

  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  metaText: {
    fontSize: 12,
    color: '#9ca3af',
  },

  dot: {
    marginHorizontal: 6,
    color: '#9ca3af',
  },

  section: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  desc: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563',
  },

  exampleRow: {
    paddingVertical: 6,
  },

  example: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
  },

  depends: {
    fontSize: 14,
    color: '#6b7280',
  },
});
