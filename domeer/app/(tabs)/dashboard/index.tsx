import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Image } from 'react-native'; 

const imageGrafico = require('../../../assets/images/Domeer-logo.png');
const imageGrafico2 = require('../../../assets/images/icone-user.jpg');
 

export default function Tutorial() {

  return (
    <LinearGradient
      colors={['rgba(252, 109, 171, 1)', 'rgba(94, 43, 255, 1)']}
      locations={[0.49, 0]}
      style={styles.container}
    >
      {}

      {}
      <Image 
        source={imageGrafico}
        style={styles.imageStyle}
      />
     <Image 
        source={imageGrafico2} 
        style={styles.imageGrafico2} 
      />
      {}

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


  imageStyle: {

    width: 300, 
    height: 150, 
    resizeMode: 'contain',
    marginTop: -13, 
  },
  
  imageGrafico2:{
   position: 'absolute',
   top: 20,
   left: 20,
   width: 50,
   height: 50,
   borderRadius : 20,
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