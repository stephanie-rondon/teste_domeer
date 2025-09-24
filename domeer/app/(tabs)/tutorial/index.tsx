import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function Tutorial() {
  return (
    <LinearGradient
      colors={['#5e2bff80', '#fc6dab']}
      style={styles.container}
    >
      <Text style={styles.text}>Tutorial</Text>
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