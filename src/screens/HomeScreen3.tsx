import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const grades = [
  { id: 'g1', name: '一年级' },
  { id: 'g2', name: '二年级' },
  { id: 'g3', name: '三年级' },
];

const subjects = [
  {
    id: 'math',
    name: '数学',
    modules: [
      {
        id: 'm1',
        title: '数与运算',
        lessons: [
          { id: 'l1', title: '加法动画' },
          { id: 'l2', title: '减法动画' },
        ],
      },
      { id: 'm2', title: '比较与关系', lessons: [{ id: 'l3', title: '大小比较' }] },
    ],
  },
  {
    id: 'physics',
    name: '物理',
    modules: [{ id: 'm3', title: '力与运动', lessons: [{ id: 'l4', title: '力的演示' }] }],
  },
];

export default function HomeScreen({ navigation }: any) {
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  const renderGradeItem = ({ item }: { item: (typeof grades)[0] }) => (
    <TouchableOpacity
      onPress={() => setSelectedGrade(item)}
      style={[styles.gradeItem, item.id === selectedGrade.id && styles.gradeItemActive]}>
      <Text style={styles.gradeText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSubject = ({ item }: { item: (typeof subjects)[0] }) => (
    <View style={styles.subjectCard}>
      <Text style={styles.subjectTitle}>{item.name}</Text>
      {item.modules.map((mod) => (
        <TouchableOpacity
          key={mod.id}
          style={styles.moduleCard}
          onPress={() => navigation.navigate('ModuleScreen', { module: mod })}>
          <Text style={styles.moduleTitle}>
            {mod.title} ({mod.lessons.length}课)
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>选择学年</Text>
      <FlatList
        data={grades}
        horizontal
        renderItem={renderGradeItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.gradeList}
      />
      <FlatList
        data={subjects}
        renderItem={renderSubject}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.subjectList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f6ff', paddingTop: 20 },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  gradeList: { paddingHorizontal: 20, marginBottom: 20 },
  gradeItem: {
    marginRight: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#d0e6ff',
  },
  gradeItemActive: { backgroundColor: '#3498db' },
  gradeText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  subjectList: { paddingHorizontal: 20 },
  subjectCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  subjectTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#2c3e50' },
  moduleCard: { backgroundColor: '#3498db', padding: 10, borderRadius: 15, marginBottom: 10 },
  moduleTitle: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
});
