import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import * as Yup from 'yup';

//validação com Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('O nome de usuário é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória')
});

type LoginFormValues = {
  name: string;
  password: string;
};

export default function Login() {
  const handleLogin = (values: LoginFormValues) =>{
    console.log("Name:", values.name);
    console.log("Password:", values.password);
  };

  return (
    <LinearGradient
          colors={['#5e2bff80', '#fc6dab']}
          style={styles.container}
        >
      <Text style={styles.title}>Vamos fazer o login?</Text>

      <Formik
        initialValues={{name: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
          <>
          <TextInput style={styles.input} placeholder="Nome do usuário" onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name}/>
          {touched.name && errors.name &&(
            <Text style={styles.textoErro}>{errors.name}</Text>
          )}

          <TextInput style={styles.input} placeholder="Senha" onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} secureTextEntry/>
          {touched.password && errors.password &&(
            <Text style={styles.textoErro}>{errors.password}</Text>
          )}

          <Pressable style={styles.button} onPress={() => handleSubmit()}>
           <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          </>
        )}
      </Formik>
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
  },
  textoErro: {
    color: '#145',
    marginBottom: 10,
    marginLeft: 5,
  }
})