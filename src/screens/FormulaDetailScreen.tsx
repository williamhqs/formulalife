import ScreenHeader from '@/components/ScreenHeader';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formula } from '@/types/formula';
import { toggleFavorite, isFavorite } from '@/store/favorites';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FormulaView from '@/components/FormulaView';
import { FormulaImageView } from '@/components/FormulaImageView';

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: {
    params: {
      formula: Formula;
      themeColor?: string;
    };
  };
};

export function FormulaDetailScreen({ navigation, route }: Props) {
  useLayoutEffect(() => {
    const parent = navigation.getParent();
    if (!parent) return;
    parent.setOptions({
      tabBarStyle: {
        position: 'absolute',
        display: 'none',
        opacity: 0,
        transform: [{ translateY: 100 }],
        pointerEvents: 'none',
      },
    });

    return () => {
      setTimeout(() => {
        parent.setOptions({
          tabBarStyle: {
            position: 'absolute',
            display: 'flex',
            opacity: 1,
            transform: [{ translateY: 0 }],
            pointerEvents: 'auto',
          },
        });
      }, 300);
    };
  }, [navigation]);

  const { formula, themeColor = '#64748b' } = route.params;

  const [fav, setFav] = useState(false);

  useEffect(() => {
    isFavorite(formula.id).then(setFav);
  }, [formula.id]);

  const onToggle = async () => {
    const list = await toggleFavorite(formula.id);
    setFav(list.includes(formula.id));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader
        title="公式详情"
        right={
          <TouchableOpacity onPress={onToggle} hitSlop={12}>
            <FontAwesome5
              name={fav ? 'star' : 'star'}
              solid={fav}
              size={18}
              color={fav ? '#facc15' : '#9ca3af'}
            />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          {/* 左侧色条 */}
          <View style={[styles.accent, { backgroundColor: themeColor }]} />

          {/* 公式名称 & 符号 */}
          <Text style={styles.name}>{formula.name}</Text>
          <FormulaView
            latex={formula.latex}
            fontSize={80}
            color="#007aff"
            displayMode={false}
            enableSave={true}
          />
          <FormulaImageView latex={formula.latex} />
          {/* level + category */}
          <View style={styles.meta}>
            <Text style={styles.metaText}>Lv {formula.level}</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.metaText}>{formula.category}</Text>
          </View>
        </View>

        {/* ===== 概念说明 ===== */}
        <View style={styles.card}>
          <Text style={styles.section}>概念说明</Text>
          <Text style={styles.desc}>{formula.description}</Text>
        </View>

        {/* ===== 示例 ===== */}
        <View style={styles.card}>
          <Text style={styles.section}>示例</Text>
          {formula.examples.map((e, i) => (
            <View key={i} style={styles.exampleRow}>
              <Text style={styles.example}>{e}</Text>
            </View>
          ))}
        </View>

        {/* ===== 前置知识 / 依赖 ===== */}
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
    overflow: 'hidden',
    elevation: 3,
    position: 'relative', // 为绝对定位accent
  },

  accent: {
    width: 4,
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },

  symbol: {
    fontSize: 36,
    fontWeight: '600',
    color: '#1f2937',
    letterSpacing: 0.5,
    marginTop: 6,
  },

  name: {
    fontSize: 18,
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
  formulaBox: {
    width: '90%',

    // borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#f0f8ff',
  },
  katexView: {
    flex: 1,
    width: '100%',
    height: 60,
  },
});
