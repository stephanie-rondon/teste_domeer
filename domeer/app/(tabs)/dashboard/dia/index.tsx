import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

interface RoundButtonProps {
  iconName: keyof typeof FontAwesome.glyphMap;
  onPress: () => void;
  label: string;
}

const RoundButton: React.FC<RoundButtonProps> = ({ iconName, onPress, label }) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        accessibilityLabel={label}
        accessibilityRole="button"
      >

        
        <FontAwesome name={iconName} size={20} color="#c04cfd" />
      </TouchableOpacity>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

export default function Tutorial() {
  const handleButtonPress = (buttonName: string) => {
    Alert.alert('Botão Pressionado', `Você clicou em: ${buttonName}`);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']}
        locations={[0, 0.6]}
        style={styles.gradient}
      >
        <Text style={[styles.text, styles.copseFont]}>SEU DIA</Text>

        <View style={styles.buttonContainer}>
          <RoundButton
            iconName="list"
            onPress={() => handleButtonPress('Tarefas')}
            label="nova Tarefa"
          />
          <RoundButton
            iconName="bullseye"
            onPress={() => handleButtonPress('Metas')}
            label="nova Meta"
          />
          <RoundButton
            iconName="refresh"
            onPress={() => handleButtonPress('Hábitos')}
            label="novo Hábito"
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFFEE5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    marginBottom: 4,
  },
  buttonLabel: {
    color: '#FFFEE5',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },

  copseFont: {
    fontFamily: 'Copse', 
  },
});

