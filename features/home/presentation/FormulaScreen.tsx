// FormulaScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import MathView from 'react-native-katex';

export default function FormulaScreen() {
  return (
    <View className="bg-red-400">
      <Text className="text-red-500">Formulas</Text>
      {/* Simple formula */}
      <MathView expression={'E = mc^2'} style={{ width: 200, height: 50 }} />

      {/* Fraction */}
      <MathView expression={'\\frac{a}{b} = c'} style={{ width: 200, height: 50 }} />

      {/* Quadratic formula */}
      <MathView
        expression={'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}'}
        style={{ width: 300, height: 50 }}
      />
    </View>
  );
}
