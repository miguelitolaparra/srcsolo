import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps'; // Dependencia para el mapa
import styles from '../theme/styles/CurasStyles';

const CurasScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Text style={styles.title}>Lista de notas</Text>

      <View style={styles.notasList}>
        <Text style={styles.notaItem}>Nota 1</Text>
        <Text style={styles.notaItem}>Nota 2</Text>
        <Text style={styles.notaItem}>Nota 3</Text>
      </View>
    </View>
  );
};

export default CurasScreen;
