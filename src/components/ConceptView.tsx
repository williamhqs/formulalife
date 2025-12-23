import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Concept = {
  title: string;
  description: string;
};

type Lesson = {
  concept: Concept;
};

export function ConceptView({ lesson }: { lesson: Lesson }) {
  const { title, description } = lesson.concept;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.desc}>{description}</Text>

      {/* 预留：以后可以放演示动画 / 图形 */}
      <View style={styles.hintBox}>
        <Text style={styles.hintText}>想一想：如果再加一个，会发生什么？</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },

  desc: {
    fontSize: 18,
    lineHeight: 28,
    color: '#34495e',
    marginBottom: 20,
  },

  hintBox: {
    backgroundColor: '#f0f6ff',
    borderRadius: 16,
    padding: 14,
  },

  hintText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '500',
  },
});
