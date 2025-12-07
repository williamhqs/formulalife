import React, { useState } from 'react';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import MathView from 'react-native-katex';
import { formulas } from '../data/formula';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/types/navigation';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function FormulaScreen({ route }: Props) {
  const headerHeight = useHeaderHeight();
  const { formulaId } = route.params;
  console.log('Route Params:', route.params);
  const formula = formulas.find((f) => f.id === '1');
  const screenWidth = Dimensions.get('window').width - 40;
  console.log('Formula ID:', formula);
  const g = 9.8;
  const [v0, setV0] = useState(10); // Initial velocity
  const [t, setT] = useState(1); // Time slider
  const insets = useSafeAreaInsets();

  const y = v0 * t - 0.5 * g * t * t;
  if (!formula)
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 items-center justify-center bg-pink-300">
          <Text className="text-red-500">Formula not found! ID: {String(formulaId)}</Text>
        </View>
      </SafeAreaView>
    );

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
      {/* Header */}
      <Text style={styles.header}>Projectile Motion</Text>

      {/* Formula Card */}
      <View style={styles.card}>
        <Text style={styles.formula}>y = v₀·t - ½·g·t²</Text>
        <Text style={styles.formulaDescription}>
          This formula calculates the vertical height of a projectile at time t.
        </Text>
        <Text style={styles.description}>
          v₀ = initial upward velocity{'\n'}g = gravity (9.8 m/s²){'\n'}t = time{'\n'}y = height
        </Text>
      </View>

      {/* Variable Cards */}
      <View style={styles.card}>
        <Text style={styles.variable}>v₀</Text>
        <Text style={styles.variableDescription}>Initial upward velocity (m/s)</Text>
        <Text style={styles.value}>Current: {v0.toFixed(1)} m/s</Text>
        <Slider
          minimumValue={0}
          maximumValue={40}
          value={v0}
          onValueChange={setV0}
          minimumTrackTintColor="#4f46e5"
          maximumTrackTintColor="#ddd"
          thumbTintColor="#4f46e5"
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.variable}>t</Text>
        <Text style={styles.variableDescription}>Time elapsed (s)</Text>
        <Text style={styles.value}>Current: {t.toFixed(2)} s</Text>
        <Slider
          minimumValue={0}
          maximumValue={5}
          value={t}
          onValueChange={setT}
          minimumTrackTintColor="#4f46e5"
          maximumTrackTintColor="#ddd"
          thumbTintColor="#4f46e5"
        />
      </View>

      {/* Result */}
      <View style={[styles.card, { backgroundColor: '#e0f7fa' }]}>
        <Text style={styles.resultLabel}>Height (y)</Text>
        <Text style={styles.resultValue}>{y.toFixed(2)} m</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  formula: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111',
  },
  formulaDescription: {
    fontSize: 14,
    color: '#555',
  },
  variable: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111',
  },
  variableDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#4f46e5',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00796b',
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});
