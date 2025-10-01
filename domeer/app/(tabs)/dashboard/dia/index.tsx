import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter este pacote instalado
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- Componente de Botão Redondo ---
interface RoundButtonProps {
  iconName: keyof typeof FontAwesome.glyphMap;
  onPress: () => void;
  label: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({ iconName, onPress, label }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityLabel={label}
      accessibilityRole="button"
    >
      <FontAwesome name={iconName} size={24} color="#FFF" />
    </TouchableOpacity>
  );
}; 

// --- Componente Principal da Tela (Tutorial) ---
export default function Tutorial() {
  const handleButtonPress = (buttonName: string) => {
    // Função para lidar com o clique do botão
    Alert.alert('Botão Pressionado', `Você clicou em: ${buttonName}`);
  };

  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)','rgba(252, 109, 171, 1)' ]}
      locations={[0, 0.6]}
      style={styles.container}
    >
      {/* Conteúdo Central da Tela */}
      <View style={styles.content}>
        <Text style={styles.text}>DIA</Text>
      </View>

      {/* View para os botões na parte debaixo da página */}
      <View style={styles.buttonContainer}>
        <RoundButton
          iconName="home"
          onPress={() => handleButtonPress('Home')}
          label="Ir para a página inicial"
        />
        <RoundButton
          iconName="search"
          onPress={() => handleButtonPress('Pesquisa')}
          label="Abrir a busca"
        />
        <RoundButton
          iconName="user"
          onPress={() => handleButtonPress('Perfil')}
          label="Acessar o perfil do usuário"
        />
      </View>
    </LinearGradient>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    // Removi justifyContent e alignItems daqui para gerenciar o layout com Vies separados
  },
  content: {
    flex: 1, // Faz com que ocupe a maior parte do espaço, empurrando o buttonContainer para baixo
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    // Estilo para a barra inferior que contém os botões
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'space-around', // Distribui o espaço uniformemente entre eles
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // Estilo opcional para que o fundo seja semi-transparente sobre o gradiente
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    paddingBottom: 20, // Ajuste para devices com 'notch' ou área segura na base
  },

  button: {
    // Estilo para o botão redondo
    backgroundColor: '#FFFEE5', // Uma cor de destaque diferente
    width: 55,
    height: 55,
    borderRadius: 27.5, // Metade da largura/altura para ser um círculo
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra para dar destaque
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
});
