import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  withTiming,
  Easing,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const modules = [
  { id: 1, title: '模块一', description: '基础数学概念', lessons: 5 },
  { id: 2, title: '模块二', description: '加减法运算', lessons: 4 },
  { id: 3, title: '模块三', description: '几何学', lessons: 4 },
  { id: 4, title: '模块四', description: '测量与单位', lessons: 4 },
  { id: 5, title: '模块五', description: '数字游戏与逻辑', lessons: 3 },
];

const ModuleCard = ({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress: () => void;
}) => {
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(animation.value, { duration: 300, easing: Easing.ease }) },
      ],
    };
  });

  const handlePress = () => {
    animation.value = 10; // 动画效果，点击时卡片稍微抬起
    onPress();
  };

  return (
    <Animated.View style={[styles.moduleCard, animatedStyle]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.cardContent}>
          <Text style={styles.moduleTitle}>{title}</Text>
          <Text style={styles.moduleDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const MainScreen = ({ navigation }: { navigation: any }) => {
  const handleModulePress = (moduleId: number) => {
    navigation.navigate('ModuleDetail', { moduleId }); // 假设跳转到模块详情页
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>一年级学习模块</Text>
      <ScrollView contentContainerStyle={styles.modulesContainer}>
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            title={module.title}
            description={module.description}
            onPress={() => handleModulePress(module.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  modulesContainer: {
    alignItems: 'center',
  },
  moduleCard: {
    width: '90%',
    marginVertical: 15,
    borderRadius: 15,
    backgroundColor: '#3498db',
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardContent: {
    alignItems: 'center',
  },
  moduleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  moduleDescription: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});

export default MainScreen;
