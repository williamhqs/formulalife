// navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/features/home/presentation/HomeScreen';
import FormulaScreen from '@/features/home/presentation/FormulaScreen';
import type { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f7f7f7' },
        headerTitleStyle: { fontWeight: '600', fontSize: 17 },
        headerTintColor: '#007AFF', // iOS blue back button
        headerLargeTitle: false, // ✅ large iOS-style title
        headerShadowVisible: false, // remove bottom shadow for clean look
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Formulas', // large title on iOS
        }}
      />
      <Stack.Screen
        name="Detail"
        component={FormulaScreen}
        options={({ route }) => ({
          title: 'abc', //route.params.formulaTitle, // show formula title in header
        })}
      />
    </Stack.Navigator>
  );
}
