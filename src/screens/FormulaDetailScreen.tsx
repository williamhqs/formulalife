import ScreenHeader from '@/components/ScreenHeader';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function FormulaDetailScreen({ route }: any) {
  const { formula } = route.params;

  return (
    <SafeAreaView>
      <ScreenHeader title="公式列表" />
      <View style={styles.container}>
        <Text style={styles.symbol}>{formula.symbol}</Text>
        <Text style={styles.name}>{formula.name}</Text>

        <Text style={styles.desc}>{formula.description}</Text>

        <Text style={styles.section}>示例</Text>
        {formula.examples.map((e, i) => (
          <Text key={i} style={styles.example}>
            {e}
          </Text>
        ))}

        {formula.dependsOn.length > 0 && (
          <>
            <Text style={styles.section}>依赖</Text>
            <Text style={styles.depends}>{formula.dependsOn.join(', ')}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  symbol: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    marginBottom: 12,
    color: '#34495e',
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  section: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
  },
  example: {
    fontSize: 16,
    marginTop: 6,
  },
  depends: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});
