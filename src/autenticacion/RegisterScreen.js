import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDoc, doc } from 'firebase/firestore';

import { registerWithEmail } from '../firebase/auth';
import { setUserName } from '../redux/actions/profileActions';
import { firestore } from '../firebase/firebaseConfig'; // Importar la instancia de Firestore

import styles from '../theme/styles/LoginStyles';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Agregar el estado para el nombre de usuario
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    await registerWithEmail(email, password);

    // Guardar los datos del usuario en Firebase Firestore
    const userRef = doc(firestore, 'users', email); // Usar el correo electrónico como ID de documento
    const userData = { email, name }; // Incluir el nombre de usuario en los datos a guardar

    try {
      await setDoc(userRef, userData);
      console.log('Datos del usuario guardados en Firestore');
    } catch (error) {
      console.log('Error al guardar los datos del usuario:', error);
    }

    dispatch(setUserName(name)); // Guardar el nombre de usuario en Redux
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={setName}
        value={name}
      />
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
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
