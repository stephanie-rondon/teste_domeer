import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function Tutorial() {
  return (
    <LinearGradient
      colors={['rgba(252, 109, 171, 1)', 'rgba(94, 43, 255, 1)']}
      style={styles.container}
    >
      <Text style={styles.text}>Exemplo de Gradiente</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});