import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const imageLogo = require('../../../assets/images/Domeer-logo.png');
const imageicone = require('../../../assets/images/icone-user.jpg');
const imagebobao = require('../../../assets/images/Gatobobao.png');
const imagedia = require('../../../assets/images/Gatodia.png');
const imagemes = require('../../../assets/images/Gatomes.png');
const imagemetas = require('../../../assets/images/Gatometas.png');
const imagegrafico = require('../../../assets/images/gatopendurado.png');

 

export default function Tutorial() {

  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']} //252, 109, 171, 1
      locations={[0.49, 0]}
      style={styles.container}
    >
       <ScrollView contentContainerStyle={styles.RolarContent}>

      <Image 
        source={imageLogo}
        style={styles.imageStyle}
      />
     <Image 
        source={imageicone} 
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

<Image 
        source={imagemetas} 
        style={styles.imagemetas} 
      />

<View style={styles.GraficoSquare}>

<Image 
        source={imagegrafico} 
        style={styles.imagegrafico} 
      />
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

  imagemetas: {
    width: 470,
     height: 200,
     left: -10, 
  },
  
  imagegrafico: {
    width: 200,
     height: 200,
    left: -170,
    top: -80,

  },
  GraficoSquare:{
    width: '85%',
    height: 270, 
    backgroundColor: '#FFFEE5', 
   borderRadius: 59,
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
    left: -10,
    width: 200,
    height: 90,
    borderRadius : 20,
   },

   imagemes:{
    position: 'absolute',
    top: -60,
    left: 10,
    width: 190,
    height: 250,
    borderRadius : 20,
   },

   imagedia:{
    position: 'absolute',
    top: -60,
    left: 20,
    width: 190,
    height: 250,
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