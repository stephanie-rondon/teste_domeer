import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function Tutorial() {
  return (
    <LinearGradient
      colors={['rgba(252, 109, 171, 1)', 'rgba(94, 43, 255, 1)']} //a primeira cor é em cima, e a segunda é embaixo
      locations={[0.5, 0]} //aqui tu muda o nivel do degrade, se aumentar o primmeiro numero, a primeira cor fica maior, segundo numero, segunda cor..
      style={styles.container}
    >
      <Text style={styles.text}>DIA</Text>
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