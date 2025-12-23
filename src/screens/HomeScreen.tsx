import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { grades as gradesData } from '../lessons/gradesData';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  const gradeList = gradesData.map((g) => ({ id: g.id, name: g.name, icon: 'school' }));
  const [selectedGrade, setSelectedGrade] = useState(gradeList[0]);

  const renderGradeItem = ({ item }: { item: (typeof gradeList)[0] }) => (
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
            <Text style={styles.moduleCount}>{mod.lessons.length} 课</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  // 根据选中的年级找到对应科目
  const subjects = gradesData.find((g) => g.id === selectedGrade.id)?.subjects ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>选择学年</Text>
      <FlatList
        data={gradeList}
        horizontal
        renderItem={renderGradeItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.gradeList}
        showsHorizontalScrollIndicator={false}
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
