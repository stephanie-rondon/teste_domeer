import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
// 1. Importar useFonts e componentes de loading
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native'; 

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // 2. Carregar a Fonte Copse
  const [fontsLoaded, error] = useFonts({
    // Caminho CORRETO a partir de app/_layout.tsx
    'Copse': require('../assets/fonts/Copse-Regular.ttf')
  });

  // Mostra um erro se houver problemas no carregamento (útil para debug)
  if (error) throw error;

  // 3. Tela de Carregamento (Splash Screen)
  // Renderiza um componente vazio ou de loading enquanto a fonte não está pronta
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 4. Renderiza o aplicativo APÓS o carregamento da fonte
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}