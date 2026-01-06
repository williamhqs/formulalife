import HomeScreen from '@/screens/HomeScreen';
import LessonScreen from '@/screens/LessonScreen4';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import { FormulaDomainScreen } from '@/screens/FormulaDomainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '@/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabColors: Record<string, string> = {
  Home: '#3b82f6', // Blue like Math
  Profile: '#10b981', // Green like Biology
};

export default function MainTabs() {
  const mainColor = '#334155'; // '#0f766e'; //'#4c1d95';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const activeColor = tabColors[route.name] ?? '#3498db';
        return {
          headerShown: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: '#f5f7fa',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            position: 'absolute',
            elevation: 5,
          },
          tabBarActiveTintColor: mainColor,
          tabBarInactiveTintColor: '#a0a0a0',
          tabBarLabelStyle: { fontSize: 12, marginBottom: 5, fontWeight: '600' },
          tabBarIconStyle: { marginTop: 5 },
        };
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
