import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ModuleScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  const { module } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <FontAwesome5 name="chevron-left" size={18} color="#2c3e50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{module.title}</Text>
      </View>

      {/* 描述 */}
      {module.description && <Text style={styles.description}>{module.description}</Text>}

      {/* 课程列表 */}
      <FlatList
        data={module.lessons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => navigation.navigate('LessonScreen')}>
            <View style={styles.lessonIndex}>
              <Text style={styles.lessonIndexText}>{index + 1}</Text>
            </View>

            <View style={styles.lessonContent}>
              <Text style={styles.lessonTitle}>{item.title}</Text>
              <Text style={styles.lessonHint}>点击进入</Text>
            </View>

            <FontAwesome5 name="angle-right" size={18} color="#ccc" />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  backBtn: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
  },

  description: {
    fontSize: 16,
    color: '#5d6d7e',
    marginBottom: 16,
  },

  list: {
    paddingBottom: 30,
  },

  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  lessonIndex: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  lessonIndexText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  lessonHint: {
    fontSize: 14,
    color: '#95a5a6',
    marginTop: 2,
  },
});
