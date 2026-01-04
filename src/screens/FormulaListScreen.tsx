import React, { useState, useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { allFormulas, getFormulasByDomain } from '@/data/index';
import { Domain, Formula } from '@/types/formula';
import { green } from 'react-native-reanimated/lib/typescript/Colors';

const domains: { id: DomainFilter; name: string; color: string }[] = [
  { id: 'all', name: '全部', color: '#64748b' },
  { id: 'math', name: '数学', color: '#3b82f6' },
  { id: 'physics', name: '物理', color: '#f97316' },
  { id: 'chemistry', name: '化学', color: '#8b5cf6' },
  { id: 'biology', name: '生物', color: '#10b981' },
];

type DomainFilter = 'all' | Domain;

export function FormulaListScreen({ navigation }: any) {
  const [selectedDomain, setSelectedDomain] = useState<DomainFilter>('all');

  const filteredFormulas = useMemo(() => {
    if (selectedDomain === 'all') return allFormulas;
    return getFormulasByDomain(selectedDomain);
  }, [selectedDomain]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={{ paddingVertical: 8, paddingHorizontal: 18 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}>
          {domains.map((cat) => {
            const selected = selectedDomain === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.categoryBtn, selected && { backgroundColor: cat.color }]}
                onPress={() => setSelectedDomain(cat.id)}>
                <Text
                  style={[styles.categoryText, selected && { color: '#fff', fontWeight: '600' }]}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* 公式列表 */}
      <FlatList
        data={filteredFormulas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.92}
            style={styles.card}
            onPress={() => navigation.navigate('FormulaDetailScreen', { formula: item })}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.tags}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Lv {item.level}</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },

  container: {
    padding: 18,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },

  symbol: {
    fontSize: 30,
    fontWeight: '600',
    color: '#111827',
    letterSpacing: 0.4,
  },

  name: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
  },

  tags: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#f1f5f9',
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
    lineHeight: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
  },
  categoryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#e2e8f0',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
