import { StyleSheet, Text, View } from "react-native";

export default function Mes() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Mes</Text>
    </View>
    
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#145",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  }
})