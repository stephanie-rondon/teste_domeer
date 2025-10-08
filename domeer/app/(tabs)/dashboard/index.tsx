import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'; 

const imageGrafico = require('../../../assets/images/Domeer-logo.png');
const imageGrafico2 = require('../../../assets/images/icone-user.jpg');
const imagebobao = require('../../../assets/images/Gatobobao.png');
const imagedia = require('../../../assets/images/Gatodia.png');
const imagemes = require('../../../assets/images/Gatomes.png');
 

export default function Tutorial() {

  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']} //252, 109, 171, 1
      locations={[0.49, 0]}
      style={styles.container}
    >
       <ScrollView contentContainerStyle={styles.RolarContent}>

      <Image 
        source={imageGrafico}
        style={styles.imageStyle}
      />
     <Image 
        source={imageGrafico2} 
        style={styles.imageGrafico2} 
      />

  

  <View style={styles.squaresContainer}>
    <View style={styles.GatoSquare}>

    <Image 
        source={imagebobao} 
        style={styles.imagebobao} 
      />


<Image 
        source={imagedia} 
        style={styles.imagedia} 
      />
    </View>
    <View style={styles.GatoSquare2}>

    <Image 
        source={imagemes} 
        style={styles.imagemes} 
      />
    </View>
</View>

<View style={styles.MetasSquare}>
</View>

<View style={styles.GraficoSquare}>
</View>
</ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  RolarContent: {
  flexGrow: 1,
  alignItems: 'center',
  paddingBottom: 90,
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
     position: 'relative',
  },
  GatoSquare2: {
    width: '45%',
  height: 150, 
  backgroundColor: '#FFFEE5',
   borderRadius: 15,
   position: 'relative',
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
    marginTop: 50,
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

  imagebobao:{
    position: 'absolute',
    top: -60,
    left: 30,
    width: 110,
    height: 90,
    borderRadius : 20,
   },

   imagemes:{
    position: 'absolute',
    top: -19,
    left: 50,
    width: 110,
    height: 200,
    borderRadius : 20,
   },

   imagedia:{
    position: 'absolute',
    top: -19,
    left: 40,
    width: 110,
    height: 200,
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