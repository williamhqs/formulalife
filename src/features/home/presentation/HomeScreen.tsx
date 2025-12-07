import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

type Subject = {
  id: string;
  name: string;
  icon: string;
  gradient: [string, string];
  topics: number;
};

const SUBJECTS: Subject[] = [
  {
    id: 'math',
    name: 'Math',
    icon: '📐',
    gradient: ['#3B82F6', '#06B6D4'],
    topics: 12,
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚡️',
    gradient: ['#7C3AED', '#8B5CF6'],
    topics: 10,
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    gradient: ['#10B981', '#34D399'],
    topics: 8,
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    gradient: ['#0EA5E9', '#38BDF8'],
    topics: 6,
  },
];

export default function HomeScreen({ navigation }: any) {
  const handlePress = (subjectId: string) => {
    navigation.navigate('Detail', { id: subjectId });
  };

  const renderSubject = ({ item }: { item: Subject }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.85}
      onPress={() => handlePress(item.id)}>
      <LinearGradient style={styles.card} colors={item.gradient}>
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subText}>{item.topics} Topics</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>👋 Hello!</Text>
        <Text style={styles.title}>What do you want to learn today?</Text>
      </View>

      <FlatList
        data={SUBJECTS}
        numColumns={2}
        renderItem={renderSubject}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const CARD_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '400',
    color: '#475569',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 4,
  },
  grid: {
    paddingBottom: 100,
  },
  cardContainer: {
    width: '50%',
    padding: 8,
  },
  card: {
    height: CARD_SIZE,
    borderRadius: 22,
    padding: 16,
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 32,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  subText: {
    fontSize: 13,
    color: 'white',
    opacity: 0.9,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
  },
  navText: {
    fontSize: 26,
    opacity: 0.7,
  },
});
