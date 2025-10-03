<<<<<<< HEAD
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter este pacote instalado
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
=======
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
>>>>>>> e7a7413d3aaefe2ba88ebdf8ae1a679791c2625a

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


export default function Tutorial() {
  const handleButtonPress = (buttonName: string) => {
   
    Alert.alert('Botão Pressionado', `Você clicou em: ${buttonName}`);
  };

  return (
    <LinearGradient
      colors={['rgba(94, 43, 255, 1)','rgba(252, 109, 171, 1)' ]}
      locations={[0, 0.6]}
      style={styles.container}
    >
      
      <View style={styles.content}>
        <Text style={styles.text}>DIA</Text>
      </View>

      
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

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  
  },
  content: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    paddingBottom: 20,
  },

  button: {
<<<<<<< HEAD
    // Estilo para o botão redondo
    backgroundColor: '#FFFEE5', // Uma cor de destaque diferente
=======
    
    backgroundColor: '#34D399', 
>>>>>>> e7a7413d3aaefe2ba88ebdf8ae1a679791c2625a
    width: 55,
    height: 55,
    borderRadius: 27.5, 
    justifyContent: 'center',
    alignItems: 'center',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
});