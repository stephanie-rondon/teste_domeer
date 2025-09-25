import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function Tutorial() {
  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']} 
      locations={[0, 0.49]}
      style={styles.container}
    >
      <Text style={styles.text}>Mês</Text>
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
});