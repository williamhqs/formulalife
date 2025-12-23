import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function LessonLayout({ title, children }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenHeader title={title} />

      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f0f6ff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    alignItems: 'center',
  },
});
