// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ModuleItem = {
  id: string;
  title: string;
  subtitle: string;
};

export const grade1Modules: ModuleItem[] = [
  { id: 'count-change', title: '数量与变化', subtitle: '理解数量如何增加和减少' },
  { id: 'compare', title: '比较与关系', subtitle: '哪个多？哪个少？' },
  { id: 'position', title: '位置与方向', subtitle: '上下左右与顺序' },
  { id: 'process', title: '变化过程', subtitle: '一步步发生了什么' },
  { id: 'structure', title: '图形与结构', subtitle: '用形状理解数学' },
];

export default function HomeScreen() {
  const currentGrade = '一年级';
  const subject = '数学';

  const featuredModule = grade1Modules[0];

  const renderModule = ({ item }: { item: ModuleItem }) => {
    return (
      <TouchableOpacity style={styles.moduleCard} activeOpacity={0.8}>
        <View style={styles.moduleDot} />
        <View>
          <Text style={styles.moduleTitle}>{item.title}</Text>
          <Text style={styles.moduleSubtitle}>{item.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.gradeText}>
            {currentGrade} · {subject} ▾
          </Text>
        </TouchableOpacity>
        <Text style={styles.slogan}>用动画理解数学</Text>
      </View>

      {/* Featured Module */}
      <View style={styles.featuredCard}>
        <Text style={styles.featuredLabel}>推荐学习</Text>
        <Text style={styles.featuredTitle}>{featuredModule.title}</Text>
        <Text style={styles.featuredSubtitle}>从直觉开始理解加法</Text>
      </View>

      {/* Module List */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>全部模块</Text>
      </View>

      <FlatList
        data={grade1Modules}
        keyExtractor={(item) => item.id}
        renderItem={renderModule}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  /* Header */
  header: {
    marginTop: 10,
    marginBottom: 24,
  },
  gradeText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1f2d3d',
  },
  slogan: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b7c93',
  },

  /* Featured */
  featuredCard: {
    backgroundColor: '#f2f6ff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 32,
  },
  featuredLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4c6ef5',
    marginBottom: 6,
  },
  featuredTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1f2d3d',
  },
  featuredSubtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#4a5d73',
  },

  /* List */
  listHeader: {
    marginBottom: 12,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2d3d',
  },
  listContainer: {
    paddingBottom: 40,
  },

  /* Module Card */
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e6ebf1',
  },
  moduleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4c6ef5',
    marginRight: 14,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2d3d',
  },
  moduleSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#6b7c93',
  },
});
