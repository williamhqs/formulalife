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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>⭐ 我的收藏公式</Text>

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
              style={styles.item}
              onPress={() =>
                navigation.navigate('FormulaDetailScreen', {
                  formula: item,
                })
              }>
              <Text style={styles.symbol}>{item.symbol}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  symbol: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111827',
  },
  name: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#9ca3af',
    fontSize: 14,
  },
});
