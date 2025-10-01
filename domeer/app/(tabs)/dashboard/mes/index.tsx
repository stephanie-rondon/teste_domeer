import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native'; 

const imageGrafico = require('../../../../assets/images/Gato-espiando.png'); 

export default function Tutorial() {

  return (
    <LinearGradient
      colors={['rgba(252, 109, 171, 1)', 'rgba(94, 43, 255, 1)']}
      locations={[0.49, 0]}
      style={styles.container}
    >
      
      <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.copseText, styles.headerText]}>
          Seu Mês
        </Text>
        <View style={styles.underline}></View>
      </View>

      
      <Image 
        source={imageGrafico}
        style={styles.imageStyle}
      />
      
      <View style={styles.whiteSquare}>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  headerContainer: {
    paddingTop: 25, 
    width: '80%', 
    alignItems: 'center',
    marginBottom: 20,
  },

  underline: {
    height: 2, 
    width: '100%', 
    backgroundColor: 'white', 
    marginTop: 5,
  },
  
  imageStyle: {
    width: 300, 
    height: 120, 
    resizeMode: 'contain',
    marginTop: -40, 
  },

  whiteSquare: {
    width: '80%', 
    height: 300, 
    backgroundColor: '#FFFEE5',
    borderRadius: 15,
    marginTop: -1,
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  copseText: {
    fontFamily: 'Copse', 
    fontWeight: 'normal', 
  },
  
  headerText: {
    fontSize: 33,
  }
});