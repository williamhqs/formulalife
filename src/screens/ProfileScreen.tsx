import React, { useCallback, useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { allFormulas } from '@/data/index';
import { useFocusEffect } from '@react-navigation/native';
import { getFavorites } from '@/store/favorites';

export default function ProfileScreen({ navigation }: any) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      getFavorites().then(setFavoriteIds);
    }, [])
  );

  const favoriteFormulas = allFormulas.filter((f) => favoriteIds.includes(f.id));

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>我的收藏</Text>
        <Text style={styles.subtitle}>{favoriteFormulas.length} 个公式</Text>
      </View>

      {favoriteFormulas.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>还没有收藏公式</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteFormulas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.card}
              onPress={() => navigation.navigate('FormulaDetailScreen', { formula: item })}>
              <View style={styles.topRow}>
                <Text style={styles.symbol}>{item.symbol}</Text>

                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>Lv {item.level}</Text>
                </View>
              </View>

              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.category}>{item.category}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc', // 非纯白，更高级
    paddingHorizontal: 16,
  },

  /* Header */
  header: {
    marginTop: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#020617',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748b',
  },

  /* Card */
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,

    // 极轻阴影（iOS）
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },

    // Android
    elevation: 2,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  symbol: {
    fontSize: 24,
    fontWeight: '500',
    color: '#020617',
  },

  levelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#f1f5f9',
  },

  levelText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
  },

  name: {
    marginTop: 10,
    fontSize: 15,
    color: '#334155',
    fontWeight: '500',
  },

  category: {
    marginTop: 4,
    fontSize: 12,
    color: '#94a3b8',
    textTransform: 'capitalize',
  },
});
