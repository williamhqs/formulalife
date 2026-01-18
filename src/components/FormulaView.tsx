// FormulaView.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Katex from 'react-native-katex';
import SkeletonBar from './SkeletonBar';

type FormulaViewProps = {
  latex: string; // 要显示的 LaTeX 字符串
  fontSize?: number; // 公式字体大小（默认 80）
  color?: string; // 公式颜色（默认蓝色）
  displayMode?: boolean; // 块公式还是行内公式
  containerStyle?: ViewStyle; // 父容器额外样式
  heightMultiplier?: number; // optional, default 1.6
};

export default function FormulaView({
  latex,
  fontSize = 80,
  color = '#007aff',
  displayMode = true,
  containerStyle,
  heightMultiplier = 1,
}: FormulaViewProps) {
  const inlineStyle = `
    html, body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .katex {
      font-size: ${fontSize}px;
      color: ${color};
    }
  `;

  const containerHeight = fontSize * heightMultiplier;
  const [ready, setReady] = useState(false);
  return (
    <View style={[styles.formulaBox, { height: containerHeight }, containerStyle]}>
      {!ready && <SkeletonBar height={fontSize * 0.9} width="100%" />}

      <Katex
        expression={latex}
        style={{ flex: 1 }}
        inlineStyle={inlineStyle}
        displayMode={displayMode}
        throwOnError={false}
        onLoad={() => {
          setReady(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formulaBox: {
    width: '100%',
    borderColor: '#007aff',
    borderRadius: 10,
    backgroundColor: '#f0f8ff',
    overflow: 'hidden',
  },
});
