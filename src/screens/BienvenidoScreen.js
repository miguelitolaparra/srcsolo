import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../theme/styles/BienvenidoStyles';

const BienvenidoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a nuestra aplicación</Text>
      <Text style={styles.description}>
        Esta es una descripción general de la aplicación.
        Menciona algunas características destacadas.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>¡Si quieres tener toda la funcionalidad, inicia sesión...!</Text>
      </TouchableOpacity>
    </View>
  );
};


export default BienvenidoScreen;
