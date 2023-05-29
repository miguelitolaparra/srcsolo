
// LUNES A LAS 15:13 HORAS

import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { firestore } from '../firebase/firebaseConfig'; // Importa la instancia de firestore desde tu archivo firebaseConfig
import ImagePicker from 'react-native-image-picker';

const EditProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const user = useSelector(state => state.profile.user);
  const userId = user.id; // Obtén el ID del usuario actual desde tu estado de Redux

  const selectImage = () => {
    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.log('Error al seleccionar la imagen:', response.error);
      } else {
        setProfileImage({ uri: response.uri });
      }
    });
  };

  const uploadImageToFirebase = async () => {
    if (profileImage) {
      const filename = 'profile-image.jpg'; // Cambia esto por el nombre de archivo deseado
      const reference = storage().ref(filename);
      await reference.putFile(profileImage.uri);
      const downloadURL = await reference.getDownloadURL();

      // Actualizar la URL de la imagen de perfil en la base de datos de Firebase
      await firestore.collection('users').doc(userId).update({
        profileImage: downloadURL,
      });

      // Mostrar una notificación o mensaje de éxito
      Alert.alert('Éxito', 'La imagen de perfil ha sido actualizada correctamente.');
    } else {
      // Mostrar un mensaje de error si no se ha seleccionado una imagen
      Alert.alert('Error', 'Por favor, selecciona una imagen de perfil.');
    }
  };

  const updateUsername = async () => {
    if (username.trim() !== '') {
      await firestore.collection('users').doc(userId).update({
        username: username,
      });

      // Mostrar una notificación o mensaje de éxito
      Alert.alert('Éxito', 'El nombre de usuario ha sido actualizado correctamente.');
    } else {
      // Mostrar un mensaje de error si el nombre de usuario está vacío
      Alert.alert('Error', 'Por favor, ingresa un nombre de usuario válido.');
    }
  };

  const deleteProfileImage = async () => {
    await firestore.collection('users').doc(userId).update({
      profileImage: null,
    });

    // Mostrar una notificación o mensaje de éxito
    Alert.alert('Éxito', 'La imagen de perfil ha sido eliminada correctamente.');
  };

  return (
    <View>
      <View>
        {profileImage && <Image source={profileImage} style={{ width: 100, height: 100 }} />}
        <Button title="Seleccionar imagen" onPress={selectImage} />
        <Button title="Subir imagen" onPress={uploadImageToFirebase} />
        <Button title="Eliminar imagen" onPress={deleteProfileImage} />
      </View>
      <View>
        <TextInput
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Button title="Actualizar nombre de usuario" onPress={updateUsername} />
      </View>
    </View>
  );
};

export default EditProfileScreen;


