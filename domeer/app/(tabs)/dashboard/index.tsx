import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Image } from 'react-native'; 

const imageGrafico = require('../../../assets/images/Domeer-logo.png');
const imageGrafico2 = require('../../../assets/images/icone-user.jpg');
 

export default function Tutorial() {

  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']} //252, 109, 171, 1
      locations={[0.49, 0]}
      style={styles.container}
    >

      <Image 
        source={imageGrafico}
        style={styles.imageStyle}
      />
     <Image 
        source={imageGrafico2} 
        style={styles.imageGrafico2} 
      />

  <View style={styles.squaresContainer}>
    <View style={styles.GatoSquare}></View>
    <View style={styles.GatoSquare2}></View>
</View>

<View style={styles.MetasSquare}>
</View>

<View style={styles.GraficoSquare}>
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

  squaresContainer: {
     flexDirection: 'row',
     width: '90%',
     justifyContent: 'space-between',
     marginTop: 20,
    },

  imageStyle: {

    width: 300, 
    height: 150, 
    resizeMode: 'contain',
    marginTop: -13, 
  },

  GatoSquare: {
     width: '45%',
     height: 150, 
     backgroundColor: '#FFFEE5',
     borderRadius: 15,
  },
  GatoSquare2: {
    width: '45%',
  height: 150, 
  backgroundColor: '#FFFEE5',
   borderRadius: 15,
  },

  MetasSquare: {
    width: '90%',
     height: 130, 
     backgroundColor: '#FFFEE5', 
    borderRadius: 15,
     marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GraficoSquare:{
    width: '90%',
    height: 200, 
    backgroundColor: '#FFFEE5', 
   borderRadius: 15,
    marginTop: 25,
   justifyContent: 'center',
   alignItems: 'center',
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