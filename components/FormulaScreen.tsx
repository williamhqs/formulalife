import { View, Text, ScrollView } from 'react-native';
import FormulaCard from '../components/FormulaCard';

export default function FormulaScreen() {
  return (
    <ScrollView className="flex-1 bg-[#0f172a] p-6">
      <Text className="mb-6 text-3xl font-bold text-white">Formula App</Text>

      <FormulaCard />
    </ScrollView>
  );
}
