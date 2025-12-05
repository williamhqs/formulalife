import { View, Text, ScrollView } from 'react-native';
import { formulas } from './formula';
export default function SpeedFormulaPage() {
  const f = formulas.speed;

  return (
    <ScrollView className="flex-1 bg-gray-50 p-6">
      <Text className="mb-4 text-3xl font-bold text-blue-600">{f.title}</Text>

      <Text className="mb-6 text-lg text-gray-700">{f.explanation}</Text>

      <View className="mb-6 rounded-xl bg-white p-4 shadow-md">
        <Text className="mb-2 font-semibold text-gray-800">Formula:</Text>
        <Text className="text-lg text-gray-900">{f.formula}</Text>
      </View>

      <View className="rounded-xl bg-white p-4 shadow-md">
        <Text className="mb-2 font-semibold text-gray-800">Example:</Text>
        {/* <Text className="text-gray-900 text-lg">{f.example}</Text> */}
      </View>
    </ScrollView>
  );
}
