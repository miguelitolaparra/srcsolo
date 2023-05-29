import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../theme/styles/ProfileStyles';
import { getUserData, setUserName } from '../redux/actions/profileActions';
import { signOut } from '../firebase/auth';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { name, description } = useSelector(state => state.profile.user);
  console.log('Name:', name);
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const handleEditProfile = () => {
    navigation.navigate('EditPerfil');
    dispatch(getUserData());
  };

  const handleSignOut = () => {
    signOut();
    dispatch(setUserName(''));
    dispatch({ type: 'GET_USER_DATA_SUCCESS', payload: { name: '', description: '' } });
    navigation.navigate('Home');
    // Puedes redirigir a la pantalla de inicio de sesión u otras acciones necesarias después del cierre de sesión
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/tractor.jpeg')} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
