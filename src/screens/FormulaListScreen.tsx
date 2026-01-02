import React from 'react';
import { View, Text, FlatList, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import rawFormulas from '@/data/formula.json';
import { Formula } from '@/types/Formula';
import ScreenHeader from '@/components/ScreenHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const formulas = rawFormulas as Formula[];

export function FormulaListScreen({ navigation }: any) {
  return (
    <SafeAreaView>
      <FlatList
        data={formulas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('FormulaDetailScreen', { formula: item })}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  symbol: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2c3e50',
  },
  name: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
});
