import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { lesson05 } from '../lessons/grade1/lesson05';
import { FormulaEngine } from '../engine/core/Engine';
import { MathState } from '../engine/core/MathState';
import { Action } from '../engine/core/Action';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

function LessonScreen() {
  const [state, setState] = useState<MathState>(lesson05.initialState);
  const [balls, setBalls] = useState<number[]>([]); // 存储所有动态增加的圆球

  // 定义动画的共享值，初始位置为屏幕外
  const animation = useSharedValue(-200);

  const engine = useMemo(() => new FormulaEngine(lesson05.rule), []);

  const onAction = (action: Action) => {
    const nextState = engine.applyAction(state, action);
    setState(nextState);
  };

  const handleAdd = () => {
    if (state.objects < lesson05.max) {
      // 重置动画位置
      animation.value = -200;
      // 执行加法操作并触发动画
      animation.value = withTiming(0, { duration: 500, easing: Easing.ease });

      onAction({ type: 'ADD', value: 1 });

      // 增加一个新球
      setBalls((prevBalls) => [...prevBalls, state.objects + 1]);
    }
  };

  const handleReset = () => {
    // 重置状态和动画
    setState(lesson05.initialState);
    setBalls([]);
    animation.value = -200;
  };

  // 使用动画样式
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
      opacity: withTiming(1, { duration: 500 }),
    };
  });

  // 渲染所有动态增加的圆球
  const renderBalls = () => {
    return balls.map((ball, index) => (
      <Animated.View key={index} style={[styles.ball, animatedStyle]} />
    ));
  };

  // 动态更新公式
  const renderFormula = () => {
    const initialObjects = lesson05.initialState.objects; // 初始数量
    const addedObjects = state.objects - initialObjects; // 当前数量 - 初始数量
    return `${initialObjects} + ${addedObjects} = ${state.objects}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 标题 */}
      <Text style={styles.title}>{lesson05.title}</Text>

      {/* 显示从lesson05中读取的初始圆球数量 */}
      <View style={styles.ballContainer}>
        {Array.from({ length: lesson05.initialState.objects }).map((_, index) => (
          <View key={index} style={styles.initialBall} />
        ))}
      </View>

      {/* 显示目标数量 */}
      <Text style={styles.goalText}>{`目标：${lesson05.max}`}</Text>

      {/* 显示所有新增的圆球 */}
      <View style={styles.ballContainer}>{renderBalls()}</View>

      {/* 显示动态公式 */}
      <Text style={styles.formulaText}>{renderFormula()}</Text>

      {/* 增加物体按钮 */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAdd}
        disabled={state.objects >= lesson05.max}>
        <Text style={styles.buttonText}>
          {state.objects < lesson05.max ? '增加一个' : '已达到目标'}
        </Text>
      </TouchableOpacity>

      {/* 重置按钮 */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonText}>重新开始</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  goalText: {
    fontSize: 22,
    color: '#3498db',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  ballContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 50,
  },
  initialBall: {
    width: 60,
    height: 60,
    backgroundColor: '#3498db',
    borderRadius: 30,
    marginBottom: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ball: {
    width: 60,
    height: 60,
    backgroundColor: '#3498db',
    borderRadius: 30,
    marginBottom: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  formulaText: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LessonScreen;
