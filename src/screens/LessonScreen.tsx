import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import ScreenHeader from '@/components/ScreenHeader';
import { ConceptView } from '@/components/ConceptView';
import { Ball, BallVariant } from '@/components/Ball';

import { RootStackParamList } from '@/navigation/types';
import { createEngineLesson } from '@/engine/factory/createEngineLesson';
import { FormulaEngine } from '@/engine/core/Engine';
import { MathState } from '@/engine/core/MathState';
import { Action } from '@/engine/core/Action';
import { BallsAnimation } from '@/components/BallAnimation';
import { AddPlay } from './AddPlay';
import { SubtractPlay } from './SubtractPlay';

type Phase = 'concept' | 'play';

type LessonScreenProps = NativeStackScreenProps<RootStackParamList, 'LessonScreen'>;

export default function LessonScreen({ route }: LessonScreenProps) {
  const { lesson } = route.params;

  /** ① 从 lesson 创建 engineLesson */
  const engineLesson = useMemo(() => createEngineLesson(lesson), [lesson]);

  /** ② 阶段控制 */
  const [phase, setPhase] = useState<Phase>('concept');

  /** ③ 数学状态 */
  const [state, setState] = useState<MathState>(engineLesson.play.initialState);

  /** ④ 引擎 */
  const engine = useMemo(() => new FormulaEngine(engineLesson.rule), [engineLesson.rule]);

  /** ⑤ 执行动作 */
  const onAction = (action: Action) => {
    setState(engine.applyAction(state, action));
  };

  /** ⑥ 派生数据 */
  const initialCount = engineLesson.play.initialState.objects;
  const currentCount = state.objects;
  const delta = currentCount - initialCount;
  const { max = Infinity, min = -Infinity } = engineLesson.play;
  // 确定主操作类型（ADD / REMOVE / RESET）
  const primaryAction = engineLesson.play.allowedActions[0] as 'ADD' | 'REMOVE' | 'RESET';

  const PlayComponent = useMemo(() => {
    switch (lesson.intent) {
      case 'ADD':
        return AddPlay;
      case 'SUBTRACT':
        return SubtractPlay;
      default:
        return null;
    }
  }, [lesson.intent]);

  // Ball 动画类型
  const ballVariant: BallVariant[] = [];

  if (delta > 0) {
    // 加法：新增球
    for (let i = 0; i < delta; i++) ballVariant.push('add');
  } else if (delta < 0) {
    // 减法：消失球
    for (let i = 0; i < Math.abs(delta); i++) ballVariant.push('remove');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title={lesson.title} />

      <View style={styles.card}>
        {phase === 'concept' ? (
          <>
            <ConceptView
              title={engineLesson.concept.content}
              description={engineLesson.concept.description ?? ''}
              formula={engineLesson.concept.formula}
            />

            <TouchableOpacity style={styles.primaryBtn} onPress={() => setPhase('play')}>
              <Text style={styles.btnText}>我明白了</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {phase === 'play' && PlayComponent && (
              <PlayComponent state={state} setState={setState} onAction={onAction} />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

/* ================= styles ================= */

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
