import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

export default function ProfileScreen({ navigation }: any) {
  const version = Constants.expoConfig?.version ?? 'unknown';
  const build = Constants.expoConfig?.ios?.buildNumber ?? '1';
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 16,
          }}>
          <Image
            source={require('@assets/download.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View>
            <Text>Formula Life</Text>
            <Text style={{ color: '#888', fontSize: 12 }}>
              Version {version} ({build})
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('FavoritesScreen')}>
        <Text style={styles.menuTitle}>我的收藏</Text>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc', // 非纯白，更高级
    paddingHorizontal: 16,
  },

  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuTitle: {
    fontSize: 16,
    color: '#020617',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
    color: '#94a3b8',
  },

  /* Header */
  header: {
    marginTop: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#020617',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748b',
  },
  logo: {
    width: 40,
    height: 40,
  },
});
