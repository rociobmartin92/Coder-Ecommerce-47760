import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../theme/colors";
import { firebase_auth } from "../firebase/firebase_auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIdToken, setUser } from "../redux/slice/authSlice";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
      // console.log(response);
    } catch (e) {
      console.log("Error en Login", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("register")}>
        <Text style={styles.registroText}>No tienes cuenta? Registrate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "85%",
    height: 50,
    borderColor: colors.pink,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: colors.pink,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  registroText: {
    marginTop: 30,
    fontSize: 18,
    color: colors.heavyBlue,
  },
});

export default Login;
