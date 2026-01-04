import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchingPage from '@/screens/LaunchingPage';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchingPage" component={LaunchingPage} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
}
