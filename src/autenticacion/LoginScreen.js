/* import React, { useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';

import styles from '../theme/styles/LoginStyles';
import { auth } from '../firebase/firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // Inicio de sesión exitoso
        Alert.alert('Inicio de sesión exitoso', 'Has iniciado sesión correctamente.');
      })
      .catch((error) => {
        // Error durante el inicio de sesión
        Alert.alert('Error de inicio de sesión', error.message);
      });
  };

  const handleRegister = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <TouchableOpacity onPress={handleRegister}>
        <Text style={{ textAlign: 'center', marginVertical: 10, color:'green' }}>¿No tienes cuenta? Regístrate aquí...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
 */



import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmail } from '../firebase/auth';
import styles from '../theme/styles/LoginStyles';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    await signInWithEmail(email, password);
    navigation.navigate('Perfil');
  };

  const handleRegister = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerLink}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
