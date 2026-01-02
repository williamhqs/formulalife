import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleScreen from '@/screens/ModuleScreen';
import LessonScreen from '@/screens/LessonScreen';
import { RootStackParamList } from '@/navigation/types';
import { FormulaListScreen } from '@/screens/FormulaListScreen';
import { FormulaDetailScreen } from '@/screens/FormulaDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeMain"
        component={FormulaListScreen}
        options={{ title: '首页', headerShown: false }}
      />
      <Stack.Screen name="FormulaDetailScreen" component={FormulaDetailScreen} />
      <Stack.Screen name="ModuleScreen" component={ModuleScreen} />
      <Stack.Screen name="LessonScreen" component={LessonScreen} options={{ title: '课程内容' }} />
    </Stack.Navigator>
  );
}
