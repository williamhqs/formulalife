import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// 年级数据：一年级到六年级
const grades = [
  { id: 'g1', name: '一年级', icon: 'school' },
  { id: 'g2', name: '二年级', icon: 'school' },
  { id: 'g3', name: '三年级', icon: 'school' },
  { id: 'g4', name: '四年级', icon: 'school' },
  { id: 'g5', name: '五年级', icon: 'school' },
  { id: 'g6', name: '六年级', icon: 'school' },
];

// 学科及模块示例
const subjectsByGrade: Record<string, any[]> = {
  g1: [
    {
      id: 'math',
      name: '数学',
      icon: 'calculator',
      modules: [
        {
          id: 'm1',
          title: '数与运算',
          lessons: [
            { id: 'm1-l1', title: '认识数字' },
            { id: 'm1-l2', title: '数的顺序与大小' },
            { id: 'm1-l3', title: '加法基础' },
            { id: 'm1-l4', title: '减法基础' },
          ],
        },
        {
          id: 'm2',
          title: '比较与关系',
          lessons: [
            { id: 'm2-l1', title: '比较长度和重量' },
            { id: 'm2-l2', title: '认识多与少' },
            { id: 'm2-l3', title: '理解等于与不等于' },
          ],
        },
      ],
    },
    {
      id: 'physics',
      name: '物理',
      icon: 'atom',
      modules: [
        {
          id: 'm3',
          title: '力与运动',
          lessons: [
            { id: 'm3-l1', title: '简单的推拉' },
            { id: 'm3-l2', title: '物体的运动状态' },
          ],
        },
      ],
    },
  ],
};

export default function HomeScreen({ navigation }: any) {
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  const renderGradeItem = ({ item }: { item: (typeof grades)[0] }) => (
    <TouchableOpacity
      onPress={() => setSelectedGrade(item)}
      style={[styles.gradeItem, item.id === selectedGrade.id && styles.gradeItemActive]}>
      <FontAwesome5
        name={item.icon}
        size={24}
        color={item.id === selectedGrade.id ? '#fff' : '#3498db'}
      />
      <Text style={[styles.gradeText, item.id === selectedGrade.id && { color: '#fff' }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderSubject = ({ item }: { item: any }) => (
    <View style={styles.subjectCard}>
      <View style={styles.subjectHeader}>
        <MaterialIcons name={item.icon} size={28} color="#2c3e50" />
        <Text style={styles.subjectTitle}>{item.name}</Text>
      </View>
      <View style={styles.modulesGrid}>
        {item.modules.map((mod: any) => (
          <TouchableOpacity
            key={mod.id}
            style={styles.moduleCard}
            onPress={() => navigation.navigate('ModuleScreen', { module: mod })}>
            <Text style={styles.moduleTitle}>{mod.title}</Text>
            <Text style={styles.moduleCount}>{mod.lessons.length} </Text>
          </TouchableOpacity>
        ))}
      </View>
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
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={subjectsByGrade[selectedGrade.id]}
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
    width: 90,
    height: 90,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: '#d0e6ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradeItemActive: { backgroundColor: '#3498db' },
  gradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginTop: 5,
    textAlign: 'center',
  },
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
  subjectHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  subjectTitle: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50', marginLeft: 10 },
  modulesGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  moduleCard: {
    width: (width - 60) / 2,
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 15,
    margin: 5,
  },
  moduleTitle: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  moduleCount: { fontSize: 14, color: '#fff', marginTop: 4 },
});
