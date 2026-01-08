import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'FAVORITE_FORMULAS';

export async function getFavorites(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function toggleFavorite(id: string): Promise<string[]> {
  const current = await getFavorites();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];

  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export async function isFavorite(id: string): Promise<boolean> {
  const list = await getFavorites();
  return list.includes(id);
}
