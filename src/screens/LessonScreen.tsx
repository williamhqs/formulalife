import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { lesson05 } from '../lessons/grade1/lesson05';
import { FormulaEngine } from '../engine/core/Engine';
import { MathState } from '../engine/core/MathState';
import { Action } from '../engine/core/Action';
import { Ball } from '@/components/Ball'; // 确保 Ball 组件已存在
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { ScreenHeader } from '@/components/ScreenHeader';

function LessonScreen() {
  const [state, setState] = useState<MathState>(lesson05.initialState);

  const engine = useMemo(() => new FormulaEngine(lesson05.rule), []);

  const onAction = (action: Action) => {
    const nextState = engine.applyAction(state, action);
    setState(nextState);
  };

  const handleAdd = () => {
    if (state.objects < lesson05.max) {
      onAction({ type: 'ADD', value: 1 });
    }
  };

  const handleReset = () => {
    setState(lesson05.initialState);
  };

  const initialCount = lesson05.initialState.objects;
  const addedCount = state.objects - initialCount;

  // 公式高亮动画
  const highlight = useSharedValue(0);
  if (addedCount > 0) {
    highlight.value = withTiming(1, { duration: 500 });
  } else {
    highlight.value = withTiming(0, { duration: 300 });
  }

  const formulaStyle = useAnimatedStyle(() => ({
    color: highlight.value > 0 ? '#e67e22' : '#2c3e50', // 高亮新增部分
    fontWeight: highlight.value > 0 ? 'bold' : 'normal',
  }));

  const renderFormula = () => (
    <Text style={styles.formulaText}>
      <Text style={styles.formulaBase}>{initialCount} + </Text>
      <Animated.Text style={formulaStyle}>{addedCount}</Animated.Text>
      <Text style={styles.formulaBase}> = {state.objects}</Text>
    </Text>
  );

  // 渲染球
  const renderBalls = () => (
    <>
      {Array.from({ length: initialCount }).map((_, index) => (
        <Ball key={`init-${index}`} />
      ))}
      {Array.from({ length: addedCount }).map((_, index) => (
        <Ball key={`add-${index}`} animated />
      ))}
    </>
  );

  // 按钮渐变效果
  const addButtonOpacity = useSharedValue(state.objects >= lesson05.max ? 0.6 : 1);
  const addButtonStyle = useAnimatedStyle(() => ({
    opacity: withTiming(addButtonOpacity.value, { duration: 300 }),
  }));

  if (state.objects >= lesson05.max) addButtonOpacity.value = 0.6;
  else addButtonOpacity.value = 1;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="加在一起" />

      <View style={styles.ballContainer}>{renderBalls()}</View>

      <Text style={styles.goalText}>{`目标：${lesson05.max}`}</Text>

      {renderFormula()}

      <Animated.View style={[addButtonStyle]}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAdd}
          disabled={state.objects >= lesson05.max}>
          <Text style={styles.buttonText}>
            {state.objects < lesson05.max ? '增加一个' : '已达到目标'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonText}>重新开始</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20 },
  ballContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  goalText: { fontSize: 22, fontWeight: 'bold', color: '#3498db', marginBottom: 20 },
  formulaText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 40,
    flexDirection: 'row',
  },
  formulaBase: { color: '#2c3e50', fontWeight: 'bold' },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default LessonScreen;
