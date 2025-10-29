import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TelaComDegrade() {
  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']} // cores do degradê
      locations={[0, 0.6]}
      style={styles.container}
    >
      <Text style={styles.texto}>metas</Text>
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
  });