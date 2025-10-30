import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Image, ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Mes: undefined;
};

const imageLogo = require('../../../assets/images/Domeer-logo.png');
const imageicone = require('../../../assets/images/icone-user.jpg');
const imagebobao = require('../../../assets/images/Gatobobao.png');
const imagedia = require('../../../assets/images/Gatodia.png');
const imagemes = require('../../../assets/images/Gatomes.png');
const imagemetas = require('../../../assets/images/Gatometas.png');
const imagegrafico = require('../../../assets/images/gatopendurado.png');

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']}
      locations={[0.49, 0]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.RolarContent}>
        <Image source={imageLogo} style={styles.imageStyle} />
        <Image source={imageicone} style={styles.imageGrafico2} />

        <View style={styles.squaresContainer}>
          <TouchableOpacity
            style={styles.GatoSquare}
            onPress={() => {
              console.log('Botão MÊS clicado');
              navigation.navigate('Mes');
            }}
          >
            <Image source={imagebobao} style={styles.imagebobao} />
            <Image source={imagedia} style={styles.imagedia} />
            <Text style={[styles.copseText, styles.headerText, styles.GatoSquareText]}>
              SEU MÊS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.GatoSquare2} onPress={() => {}}>
            <Image source={imagemes} style={styles.imagemes} />
            <Text style={[styles.copseText, styles.headerText, styles.GatoSquare2Text]}>
              SEU DIA
            </Text>
          </TouchableOpacity>
        </View>

        <Image source={imagemetas} style={styles.imagemetas} />
        <Text style={[styles.copseText, styles.headerText, styles.metasText]}>
          METAS CONCLUIDAS
        </Text>

        <View style={styles.GraficoSquare}>
          <Image source={imagegrafico} style={styles.imagegrafico} />
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
  squaresContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  GatoSquare: {
    zIndex: 1,
    width: '45%',
    height: 150,
    backgroundColor: '#FFFEE5',
    borderRadius: 15,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  GatoSquare2: {
    width: '45%',
    height: 150,
    backgroundColor: '#FFFEE5',
    borderRadius: 15,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  GatoSquareText: {
    color: '#ffffff',
    fontSize: 20,
    top: 50,
  },
  GatoSquare2Text: {
    color: '#ffffff',
    fontSize: 20,
    top: 50,
  },
  metasText: {
    color: '#ffffff',
    fontSize: 15,
    top: -140,
  },
  imageStyle: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: -13,
  },
  imageGrafico2: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  imagebobao: {
    position: 'absolute',
    top: -60,
    left: 5,
    width: 180,
    height: 90,
    borderRadius: 20,
  },
  imagemes: {
    position: 'absolute',
    top: -44,
    left: 10,
    width: 170,
    height: 230,
    borderRadius: 20,
  },
  imagedia: {
    position: 'absolute',
    top: -45,
    left: 20,
    width: 170,
    height: 230,
    borderRadius: 20,
  },
  imagemetas: {
    width: 460,
    height: 190,
    left: -5,
    top: 10,
  },
  imagegrafico: {
    width: 200,
    height: 200,
    left: -150,
    top: -80,
  },
  GraficoSquare: {
    width: '80%',
    height: 270,
    backgroundColor: '#FFFEE5',
    borderRadius: 59,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copseText: {
    fontFamily: 'Copse',
    fontWeight: 'normal',
  },
  headerText: {
    fontSize: 33,
  },
});
