import { firebase } from '../firebase/firebaseConfig' // Importa tu instancia de Firebase

const fetchUserData = async () => {
  try {
    const userId = firebase.auth().currentUser.uid; // Obtiene el ID del usuario actualmente autenticado
    console.log('UserID:', userId); // Paso 4: Agregar esta línea
    const userDoc = await firebase.firestore().collection('users').doc(userId).get(); // Obtiene el documento del usuario desde Firestore

    if (userDoc.exists) {
      const userData = userDoc.data(); // Obtiene los datos del usuario del documento
      return userData;
    } else {
      throw new Error('El usuario no existe');
    }
  } catch (error) {
    throw new Error('Error al obtener los datos del usuario');
  }
};

export default fetchUserData;
