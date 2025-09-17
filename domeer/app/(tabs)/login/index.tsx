import { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";

export default function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = () =>{
    console.log("Name:", name);
    console.log("Password:", password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Login</Text>
      <TextInput style={styles.input} placeholder="Nome do usuário" onChangeText={setName} value={name}/>
      <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} value={password}/>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
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
  },
  input: {
    backgroundColor: "#fff",
    width: 200, 
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10, 
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#145",
  }
})