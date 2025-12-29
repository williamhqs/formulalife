import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ConceptProps = {
  title?: string;
  description: string;
  formula?: string;
  hint?: string;
};

export function ConceptView({ title, description, formula, hint }: ConceptProps) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <Text style={styles.desc}>{description}</Text>

      {formula && <Text style={styles.formula}>{formula}</Text>}

      {hint && (
        <View style={styles.hintBox}>
          <Text style={styles.hintText}>{hint}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  formula: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
  },
  hintBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f5f7fa',
    borderRadius: 12,
  },
  hintText: {
    fontSize: 14,
    color: '#666',
  },
});
