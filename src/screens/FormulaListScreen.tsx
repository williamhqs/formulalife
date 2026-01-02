import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import rawFormulas from '@/data/formula.json';
import { Formula } from '@/types/formula';

const formulas = rawFormulas as Formula[];

export function FormulaListScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={formulas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.92}
            style={styles.card}
            onPress={() => navigation.navigate('FormulaDetailScreen', { formula: item })}>
            {/* Symbol */}
            <Text style={styles.symbol}>{item.symbol}</Text>

            {/* Name */}
            <Text style={styles.name}>{item.name}</Text>

            {/* Meta */}
            <View style={styles.meta}>
              <Text style={styles.metaText}>Lv {item.level}</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.metaText}>{item.category}</Text>
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
    backgroundColor: '#f5f7fa', // 比纯灰更高级
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

    // iOS-like shadow（更克制）
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },

    // Android
    elevation: 2,
  },

  symbol: {
    fontSize: 30,
    fontWeight: '600',
    color: '#111827', // 更深一点，主视觉
    letterSpacing: 0.4,
  },

  name: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
  },

  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  metaText: {
    fontSize: 12,
    color: '#9ca3af', // 明确是“辅助信息”
  },

  dot: {
    marginHorizontal: 6,
    color: '#d1d5db',
  },
});
