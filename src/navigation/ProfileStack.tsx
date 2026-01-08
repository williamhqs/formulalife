import { FormulaDetailScreen } from '@/screens/FormulaDetailScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import { RootStackParamList } from '@/navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeMain"
        component={ProfileScreen}
        options={{ title: '首页', headerShown: false }}
      />
      <Stack.Screen name="FormulaDetailScreen" component={FormulaDetailScreen} />
    </Stack.Navigator>
  );
}
