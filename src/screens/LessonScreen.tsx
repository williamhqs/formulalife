import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { lesson05 } from '../lessons/grade1/lesson05';
import { FormulaEngine } from '../engine/core/Engine';
import { MathState } from '../engine/core/MathState';
import { Action } from '../engine/core/Action';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

function LessonScreen() {
  const [state, setState] = useState<MathState>(lesson05.initialState);
  const [balls, setBalls] = useState<number[]>([]);

  // 初始化动画的共享值
  const animation = useSharedValue(-200); // 初始位置在屏幕外

  const engine = useMemo(() => new FormulaEngine(lesson05.rule), []);

  const onAction = (action: Action) => {
    const nextState = engine.applyAction(state, action);
    setState(nextState);
  };

  const handleAdd = () => {
    if (state.objects < lesson05.max) {
      animation.value = withTiming(0, { duration: 500 });

      onAction({ type: 'ADD', value: 1 });

      setBalls((prevBalls) => [...prevBalls, state.objects + 1]);
    }
  };

  // 使用动画样式
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
      opacity: withTiming(1, { duration: 500 }),
    };
  });

  // 渲染所有圆球
  const renderBalls = () => {
    return balls.map((ball, index) => (
      <Animated.View
        key={index}
        style={[
          {
            width: 60,
            height: 60,
            backgroundColor: '#3498db',
            borderRadius: 30,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
          },
          animatedStyle,
        ]}
      />
    ));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f0f0f0',
      }}
      edges={['top']}>
      <View style={{ flex: 1, backgroundColor: '#f0f0f0', padding: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 20 }}>
          {lesson05.title}
        </Text>

        {/* 简化显示目标：显示目标数量的进度条或视觉效果 */}
        <Text style={{ fontSize: 22, color: '#3498db', fontWeight: 'bold', marginBottom: 20 }}>
          {`目标：${lesson05.max}`} {/* 只显示目标数量 */}
        </Text>

        {/* 显示所有的圆球 */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          {renderBalls()}
        </View>

        {/* 增加对象按钮 */}
        <TouchableOpacity
          style={{
            backgroundColor: '#3498db',
            paddingVertical: 15,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}
          onPress={handleAdd}
          disabled={state.objects >= lesson05.max}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            {state.objects < lesson05.max ? '增加一个' : '已达到目标'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LessonScreen;
