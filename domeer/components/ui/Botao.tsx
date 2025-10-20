import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotaoProps {
  texto: string;
  onPress: () => void;
}

export function Botao({ texto, onPress }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'rgba(252, 109, 171, 1)', // vermelho Netflix
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 8,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
