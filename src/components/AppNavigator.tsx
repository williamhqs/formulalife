// AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
// import GradeSubjectScreen from '@/screens/GradeSubjectScreen';
// import ModuleScreen from '@/screens/ModuleScreen';
import LessonScreen from '@/screens/LessonScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function GradeSubjectScreen() {
  return <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>Practice Screen</Text>;
}

function ModuleScreen() {
  return <Text style={{ flex: 1, textAlign: 'center', marginTop: 50 }}>Profile Screen</Text>;
}

// Home 内部 Stack
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: '首页', headerShown: false }}
      />
      <HomeStack.Screen
        name="GradeSubject"
        component={GradeSubjectScreen}
        options={{ title: '选择年级/科目' }}
      />
      <HomeStack.Screen
        name="ModuleScreen"
        component={ModuleScreen}
        options={{ title: '选择模块' }}
      />
      <HomeStack.Screen name="LessonScreen" component={LessonScreen} options={{ title: '课程' }} />
    </HomeStack.Navigator>
  );
}

// Bottom Tab Navigator
export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#f0f6ff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          position: 'absolute',
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#a0a0a0',
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeScreen} // 可以改为 ProfileScreen
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={HomeScreen} // 可以改为 SettingsScreen
        options={{
          tabBarLabel: '设置',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
