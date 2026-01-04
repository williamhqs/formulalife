import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const subjects = [
  { name: '数学', color: '#3b82f6' },
  { name: '物理', color: '#f97316' },
  { name: '化学', color: '#8b5cf6' },
  { name: '生物', color: '#10b981' },
  { name: '全部', color: '#64748b' },
];

export default function LaunchingPage({ navigation }: any) {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // 模拟加载完成 2 秒后跳转
    const timeout = setTimeout(() => {
      navigation.replace('FormulaListScreen'); // 替换掉启动页
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.logo, { opacity: fadeAnim }]}>Formula Life</Animated.Text>

      <View style={styles.subjects}>
        {subjects.map((s) => (
          <View key={s.name} style={[styles.subjectCircle, { backgroundColor: s.color }]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 40,
  },
  subjects: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subjectCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 10,
  },
});
