// FormulaView.tsx
import React, { useRef, useState } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, Text, Alert } from 'react-native';
import Katex from 'react-native-katex';
import ViewShot from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system/legacy';

import * as MediaLibrary from 'expo-media-library';
import SkeletonBar from './SkeletonBar';

type FormulaViewProps = {
  latex: string;
  fontSize?: number;
  color?: string;
  displayMode?: boolean;
  containerStyle?: ViewStyle;
  heightMultiplier?: number;
  enableSave?: boolean;
};

export default function FormulaView({
  latex,
  fontSize = 80,
  color = '#007aff',
  displayMode = true,
  containerStyle,
  heightMultiplier = 1,
  enableSave = true,
}: FormulaViewProps) {
  const viewShotRef = useRef<ViewShot | null>(null);
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);

  const inlineStyle = `
    html, body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: transparent;
    }
    .katex {
      font-size: ${fontSize}px;
      color: ${color};
    }
  `;

  const containerHeight = fontSize * heightMultiplier;

  const onSaveImage = async () => {
    if (!ready || saving) return;

    try {
      setSaving(true);
      const ref = viewShotRef.current;
      if (!ref) return;

      // Capture the formula view
      const uri = await ref.capture?.();
      if (!uri) return;

      const fileName = `formula_${Date.now()}.png`;
      const fileUri = `${FileSystem.cacheDirectory}${fileName}`;

      // Copy to a temporary cache file
      await FileSystem.copyAsync({ from: uri, to: fileUri });

      // Request permissions
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('权限不足', '无法保存到相册');
        return;
      }

      // Save to gallery
      await MediaLibrary.saveToLibraryAsync(fileUri);

      Alert.alert('保存成功', '公式图片已保存到相册');
    } catch (e) {
      console.error(e);
      Alert.alert('保存失败', `${e}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={containerStyle}>
      <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1, result: 'tmpfile' }}>
        <View style={[styles.formulaBox, { height: containerHeight }]}>
          {!ready && <SkeletonBar height={fontSize * 0.9} width="100%" />}

          <Katex
            expression={latex}
            style={{ flex: 1 }}
            inlineStyle={inlineStyle}
            displayMode={displayMode}
            throwOnError={false}
            onLoad={() => setReady(true)}
          />
        </View>
      </ViewShot>

      {enableSave && (
        <TouchableOpacity
          onPress={onSaveImage}
          disabled={!ready || saving}
          style={[styles.saveBtn, (!ready || saving) && styles.saveBtnDisabled]}>
          <Text style={styles.saveText}>{saving ? '保存中...' : '保存公式'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formulaBox: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff', // 导出图片必须是白色
    overflow: 'hidden',
    justifyContent: 'center',
  },
  saveBtn: {
    marginTop: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#007aff',
  },
  saveBtnDisabled: {
    opacity: 0.5,
  },
  saveText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
