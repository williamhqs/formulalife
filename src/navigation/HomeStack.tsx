// navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import FormulaScreen from '@/features/home/presentation/FormulaScreen';
import type { RootStackParamList } from '../types/navigation';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const Stack = createNativeStackNavigator();

function GradeSubjectScreen() {
  return <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>Practice Screen</Text>;
}

function ModuleScreen() {
  return <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>Profile Screen</Text>;
}

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: '首页', headerShown: false }}
      />
      <Stack.Screen
        name="GradeSubject"
        component={GradeSubjectScreen}
        options={{ title: '选择年级/科目' }}
      />
      <Stack.Screen name="ModuleScreen" component={ModuleScreen} options={{ title: '选择模块' }} />
      {/* <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ title: '课程' }} /> */}
    </Stack.Navigator>
  );
}
