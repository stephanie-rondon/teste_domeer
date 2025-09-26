import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';
// REMOVA: import { useFonts } from 'expo-font';
// REMOVA: import { ActivityIndicator } from 'react-native';

export default function Tutorial() {
  // A fonte já está carregada pelo _layout.tsx, não precisamos de 'useFonts' aqui.

  return (
    <LinearGradient
      colors={['rgba(252, 109, 171, 1)', 'rgba(94, 43, 255, 1)']}
      locations={[0.49, 0]}
      style={styles.container}
    >
      {/* Apenas usa a fonte no estilo */}
      <Text style={[styles.text, styles.copseText]}>
        Home - Fonte Copse
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#145',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  copseText: {
    // A chave 'Copse' agora funciona em todo o aplicativo!
    fontFamily: 'Copse', 
    fontWeight: 'normal', 
  },
});