import React, { useRef } from 'react';
import { View, Button, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import FormulaView from './FormulaView';
import ViewShot, { captureRef } from 'react-native-view-shot';

type Props = {
  latex: string;
  fontSize?: number;
};

export function FormulaImageView({ latex, fontSize = 32 }: Props) {
  const ref = useRef<ViewShot>(null);
  if (!ref.current) return;
  const downloadImage = async () => {
    try {
      const uri = await captureRef(ref.current!, {
        format: 'png',
        quality: 1,
        result: 'tmpfile',
      });

      if (!uri) return;

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied');
        return;
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert('Saved', 'Formula image saved to gallery');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <ViewShot ref={ref} options={{ format: 'png', quality: 1, result: 'tmpfile' }}>
        <FormulaView latex={latex} fontSize={fontSize} color="#000" displayMode={true} />
      </ViewShot>

      <Button title="Download as Image" onPress={downloadImage} />
    </View>
  );
}
