import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from '../theme/styles/NotasStyles'

const NotasScreen = () => {
  // Datos de ejemplo para la lista de notas
  const notasData = [
    { id: 1, title: 'Nota 1', content: 'Contenido de la nota 1' },
    { id: 2, title: 'Nota 2', content: 'Contenido de la nota 2' },
    { id: 3, title: 'Nota 3', content: 'Contenido de la nota 3' },
  ];

  // Renderizar cada elemento de la lista de notas
  const renderNotaItem = ({ item }) => (
    <TouchableOpacity style={styles.notaItem}>
      <Text style={styles.notaTitle}>{item.title}</Text>
      <Text style={styles.notaContent}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notasData}
        renderItem={renderNotaItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NotasScreen;
