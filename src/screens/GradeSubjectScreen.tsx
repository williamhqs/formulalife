// // screens/GradeSubjectScreen.tsx
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '@/navigation/AppNavigator';
// import { FontAwesome5 } from '@expo/vector-icons';

// type RouteProps = {
//   params: {
//     grade: string;
//     subject: string;
//     modules: { id: string; title: string; icon?: string; lessons?: number }[];
//   };
// };

// export default function GradeSubjectScreen() {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   const route = useRoute<RouteProps>();
//   const { grade, subject, modules } = route.params;

//   const renderModule = ({ item }: { item: any }) => (
//     <TouchableOpacity
//       style={styles.moduleCard}
//       onPress={() => navigation.navigate('ModuleScreen', { module: item })}>
//       <FontAwesome5 name={item.icon || 'book'} size={24} color="#3498db" />
//       <Text style={styles.moduleTitle}>{item.title}</Text>
//       {item.lessons && <Text style={styles.moduleCount}>{item.lessons} 课</Text>}
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>
//         {grade} - {subject}
//       </Text>
//       <FlatList
//         data={modules}
//         renderItem={renderModule}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={{ justifyContent: 'space-between' }}
//         contentContainerStyle={{ paddingVertical: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f0f6ff', paddingHorizontal: 20, paddingTop: 20 },
//   header: { fontSize: 28, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20 },
//   moduleCard: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingVertical: 30,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     marginBottom: 20,
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   moduleTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   moduleCount: { fontSize: 14, color: '#777', marginTop: 5 },
// });
