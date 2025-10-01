import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";

export default function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const handleLogin = () =>{
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Password:", confirmPassword);
  }

  return (
    <LinearGradient
          colors={['#5e2bff80', '#fc6dab']}
          style={styles.container}
        >
      <Text style={styles.title}>Página de Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome do usuário" onChangeText={setName} value={name}/>
      <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} value={password}/>
      <TextInput style={styles.input} placeholder="Confirmar Senha*" onChangeText={setconfirmPassword} value={confirmPassword}/>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
      </LinearGradient>

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