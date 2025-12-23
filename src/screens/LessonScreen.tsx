import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { lesson05 } from '../lessons/grade1/lesson05';
import { FormulaEngine } from '../engine/core/Engine';
import { MathState } from '../engine/core/MathState';
import { Action } from '../engine/core/Action';

import { Ball } from '@/components/Ball';
import ScreenHeader from '@/components/ScreenHeader';
import { ConceptView } from '@/components/ConceptView';
import { Lesson } from '@/lessons/gradesData';
import { RouteProp } from '@react-navigation/native';

type Phase = 'concept' | 'play';

type LessonScreenProps = {
  route: RouteProp<{ params: { lesson: any } }, 'params'>;
};

export default function LessonScreen({ route }: LessonScreenProps) {
  const lesson = route.params;
  const [phase, setPhase] = useState<Phase>('concept');

  const [state, setState] = useState<MathState>(lesson05.initialState);
  const engine = useMemo(() => new FormulaEngine(lesson05.rule), []);

  const onAction = (action: Action) => {
    setState(engine.applyAction(state, action));
  };

  const initialCount = lesson05.initialState.objects;
  const addedCount = state.objects - initialCount;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title={lesson05.title ?? '课程'} />
      {/* ===== 内容卡片 ===== */}
      <View style={styles.card}>
        {phase === 'concept' ? (
          <>
            <ConceptView lesson={lesson05} />

            <TouchableOpacity style={styles.primaryBtn} onPress={() => setPhase('play')}>
              <Text style={styles.btnText}>我明白了</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* 球 */}
            <View style={styles.ballContainer}>
              {Array.from({ length: initialCount }).map((_, i) => (
                <Ball key={`init-${i}`} />
              ))}
              {Array.from({ length: addedCount }).map((_, i) => (
                <Ball key={`add-${i}`} animated />
              ))}
            </View>

            {/* 目标 */}
            <Text style={styles.goalText}>目标：{lesson05.max}</Text>

            {/* 公式 */}
            <Text style={styles.formula}>
              {initialCount} + {addedCount} = {state.objects}
            </Text>

            <TouchableOpacity
              style={[styles.primaryBtn, state.objects >= lesson05.max && { opacity: 0.6 }]}
              disabled={state.objects >= lesson05.max}
              onPress={() => onAction({ type: 'ADD', value: 1 })}>
              <Text style={styles.btnText}>
                {state.objects < lesson05.max ? '增加一个' : '完成'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => setState(lesson05.initialState)}>
              <Text style={styles.btnText}>重新开始</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
    paddingHorizontal: 20,
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  ballContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },

  goalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 12,
  },

  formula: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 24,
  },

  primaryBtn: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 16,
  },

  secondaryBtn: {
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 12,
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
