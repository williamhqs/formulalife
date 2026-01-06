import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MAIN_COLOR = '#334155'; // 稳重、高级、不抢内容

export default function ProfileScreen({ navigation }: any) {
  const savedCount = 12; // mock

  return (
    <SafeAreaView style={styles.safe}>
      {/* 顶部空间 */}
      <View style={styles.hero}>
        <Text style={styles.appName}>Formula Life</Text>
        <Text style={styles.subtitle}>我的公式空间</Text>

        <Text style={styles.stat}>
          你已保存 <Text style={styles.highlight}>{savedCount}</Text> 个公式
        </Text>
      </View>

      {/* 主入口 */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.mainCard}
        onPress={() => navigation.navigate('SavedFormulas')}>
        <Text style={styles.mainTitle}>收藏的公式</Text>
        <Text style={styles.mainDesc}>构建你自己的公式体系</Text>
      </TouchableOpacity>

      {/* 次级入口 */}
      <TouchableOpacity style={styles.secondary}>
        <Text style={styles.secondaryText}>关于 Formula Life</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 20,
  },

  hero: {
    paddingTop: 40,
    paddingBottom: 36,
  },

  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: '#6b7280',
  },

  stat: {
    marginTop: 20,
    fontSize: 14,
    color: '#6b7280',
  },

  highlight: {
    fontWeight: '700',
    color: MAIN_COLOR,
  },

  mainCard: {
    backgroundColor: '#ffffff',
    borderRadius: 26,
    paddingVertical: 28,
    paddingHorizontal: 24,
    marginBottom: 24,

    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },

  mainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },

  mainDesc: {
    marginTop: 6,
    fontSize: 14,
    color: '#6b7280',
  },

  secondary: {
    paddingVertical: 12,
  },

  secondaryText: {
    fontSize: 14,
    color: '#9ca3af',
  },
});
