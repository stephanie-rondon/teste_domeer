import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaComDegrade() {
  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']} // cores do degradê
      locations={[0, 0.6]}
      style={styles.container}
    >
      <Text style={[styles.texto, styles.copseText, styles.headerText]}>Metas</Text>
      <View style={styles.underline}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25, // espaço do topo
      paddingHorizontal: 20,
    },
    texto: {
      fontSize: 32, // aumenta o tamanho da fonte
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    underline: {
      height: 2, 
      width: '100%', 
      backgroundColor: 'white', 
      marginTop: 5,
    },
    copseText: {
      fontFamily: 'Copse', 
      fontWeight: 'normal', 
    },
    
    headerText: {
      fontSize: 33,
    }
  });