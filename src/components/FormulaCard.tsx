import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function FormulaCard() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<string | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = parseFloat(height) / 100; // convert cm → m
    const result = parseFloat(weight) / (h * h);
    setBmi(result.toFixed(2));
  };

  return (
    <View className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md">
      <Text className="mb-4 text-xl font-semibold text-white">BMI Calculator</Text>

      {/* Weight Input */}
      <Text className="mb-1 text-white">Weight (kg)</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        placeholder="e.g. 70"
        placeholderTextColor="rgba(255,255,255,0.4)"
        className="mb-4 rounded-xl border border-white/20 bg-white/10 p-3 text-white"
      />

      {/* Height Input */}
      <Text className="mb-1 text-white">Height (cm)</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        placeholder="e.g. 175"
        placeholderTextColor="rgba(255,255,255,0.4)"
        className="mb-4 rounded-xl border border-white/20 bg-white/10 p-3 text-white"
      />

      {/* Button */}
      <TouchableOpacity
        onPress={calculateBMI}
        className="rounded-xl bg-blue-500 p-4 active:bg-blue-600">
        <Text className="text-center font-semibold text-white">Calculate</Text>
      </TouchableOpacity>

      {/* Result */}
      {bmi && (
        <View className="mt-5 rounded-xl border border-white/10 bg-white/20 p-4">
          <Text className="text-lg text-white">
            BMI Result: <Text className="font-bold">{bmi}</Text>
          </Text>
        </View>
      )}
    </View>
  );
}
