import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Certifique-se de que o 'moment' está configurado para o português, se necessário
import 'moment/locale/pt-br';
moment.locale('pt-br'); 

const { width } = Dimensions.get('window');
const DAY_WIDTH = width / 7; // Ajusta para mostrar aproximadamente 7 dias

// --- Tipos de Props ---

interface RoundButtonProps {
  iconName: keyof typeof FontAwesome.glyphMap;
  onPress: () => void;
  label: string;
}

interface DayData {
  date: string; // Ex: '2025-10-08'
  dayOfWeek: string; // Ex: 'Qua'
  dayOfMonth: string; // Ex: '08'
}

interface CalendarDayProps {
  dayData: DayData;
  isSelected: boolean;
  onSelectDay: (date: string) => void;
}

// --- Componente RoundButton (Mantido) ---

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

// --- Componente CalendarDay (Novo) ---

const CalendarDay: React.FC<CalendarDayProps> = ({ dayData, isSelected, onSelectDay }) => {
  const isToday = moment().format('YYYY-MM-DD') === dayData.date;
  
  return (
    <TouchableOpacity
      style={[
        styles.dayItem,
        isSelected ? styles.selectedDayItem : {},
        isToday ? styles.todayDayItem : {},
      ]}
      onPress={() => onSelectDay(dayData.date)}
    >
      <Text style={[styles.dayText, styles.dayOfWeekText, isSelected ? styles.selectedDayText : {}]}>
        {dayData.dayOfWeek}
      </Text>
      <Text style={[styles.dayText, styles.dayOfMonthText, isSelected ? styles.selectedDayText : {}]}>
        {dayData.dayOfMonth}
      </Text>
    </TouchableOpacity>
  );
};

// --- Função para Gerar Datas ---

const generateDates = (numberOfDays: number): DayData[] => {
  const today = moment();
  const dates: DayData[] = [];
  
  // Define o ponto de partida para alguns dias atrás (opcional, para permitir rolagem para trás)
  const startDate = moment(today).subtract(numberOfDays / 2, 'days');
  
  for (let i = 0; i < numberOfDays; i++) {
    const date = moment(startDate).add(i, 'days');
    dates.push({
      date: date.format('YYYY-MM-DD'),
      dayOfWeek: date.format('ddd'), // Dia da semana abreviado (Seg, Ter, Qua...)
      dayOfMonth: date.format('DD'), // Dia do mês (01, 02, 08...)
    });
  }
  return dates;
};

// --- Componente Principal Tutorial ---

export default function Tutorial() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const allDates = generateDates(100); // Gera 100 dias (50 para trás e 50 para frente)
  
  const flatListRef = React.useRef<FlatList>(null);

  // Função para rolar para o dia atual ao carregar
  useEffect(() => {
    // Encontra o índice do dia atual
    const todayIndex = allDates.findIndex(day => day.date === moment().format('YYYY-MM-DD'));
    if (flatListRef.current && todayIndex !== -1) {
      // Rola para centralizar (aproximadamente) o dia de hoje
      flatListRef.current.scrollToIndex({
        index: todayIndex,
        animated: false,
        viewPosition: 0.5, // Tenta centralizar
      });
    }
  }, []);

  const handleDayPress = (date: string) => {
    setSelectedDate(date);
    Alert.alert('Dia Selecionado', `Você selecionou: ${moment(date).format('dddd, DD [de] MMMM [de] YYYY')}`);
  };

  const handleButtonPress = (buttonName: string) => {
    Alert.alert('Botão Pressionado', `Você clicou em: ${buttonName} para a data: ${moment(selectedDate).format('DD/MM')}`);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(94, 43, 255, 1)', 'rgba(252, 109, 171, 1)']}
        locations={[0, 0.6]}
        style={styles.gradient}
      >
        <Text style={[styles.text, styles.copseFont]}>SEU DIA</Text>

        {/* --- Carrossel de Dias --- */}
        <View style={styles.calendarContainer}>
          <FlatList
            ref={flatListRef}
            data={allDates}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
              <CalendarDay
                dayData={item}
                isSelected={item.date === selectedDate}
                onSelectDay={handleDayPress}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            initialNumToRender={14} // Otimização
            maxToRenderPerBatch={7} // Otimização
            // Necessário para usar scrollToIndex sem precisar medir os itens dinamicamente
            getItemLayout={(data, index) => ({
                length: DAY_WIDTH,
                offset: DAY_WIDTH * index,
                index,
            })}
          />
        </View>
        {/* ------------------------- */}

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

// --- Estilos Atualizados ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingTop: 25, // Adicionado padding superior para afastar o texto do topo da tela
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 35, // Espaço entre o título e o calendário
  },
  copseFont: {
    // Certifique-se de que a fonte 'Copse' está carregada
    // Ex: fontFamily: 'Copse', 
  },
  
  // Estilos do Calendário (Novos)
  calendarContainer: {
    height: 80, // Altura fixa para o carrossel de dias
    marginBottom: 30, // Espaço após o calendário
  },
  dayItem: {
    width: DAY_WIDTH,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fundo dos dias
  },
  selectedDayItem: {
    backgroundColor: '#FFFEE5', // Fundo para o dia selecionado
  },
  todayDayItem: {
    borderWidth: 2,
    borderColor: '#c04cfd', // Borda para o dia de hoje
  },
  dayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedDayText: {
    color: '#343434', // Cor do texto para o dia selecionado
  },
  dayOfWeekText: {
    fontSize: 12,
    textTransform: 'capitalize', // Primeira letra maiúscula
  },
  dayOfMonthText: {
    fontSize: 20,
  },
  
  // Estilos dos Botões (Mantidos/Ajustados)
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    // Garante que os botões fiquem acima de outros elementos na parte inferior
    zIndex: 1, 
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
});