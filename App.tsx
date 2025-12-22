import { StatusBar } from 'expo-status-bar';

import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeStack from '@/navigation/HomeStack';
import LessonScreen from '@/screens/LessonScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from '@/screens/HomeScreen1';
import BottomTabNavigator from '@/components/BottomTabNavigator';

const Tab = createBottomTabNavigator();

function PracticeScreen() {
  return <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>Practice Screen</Text>;
}

function ProfileScreen() {
  return <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>Profile Screen</Text>;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { height: 70, paddingBottom: 10 },
            tabBarLabelStyle: { fontSize: 12 },
            tabBarActiveTintColor: '#3498db',
            tabBarInactiveTintColor: '#777',
          }}>
          <Tab.Screen
            name="HomeTab1"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="Practice"
            component={LessonScreen}
            options={{
              tabBarLabel: 'Practice',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="menu" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" size={size} color={color} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer> */}
    </SafeAreaProvider>
  );
}
