// Define las acciones para el perfil
/* export const updateProfile = (profileData) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: profileData,
  };
};
 */

import fetchUserData from "../../utils/database"

export const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  };
};

export const getUserData = () => {
  return async (dispatch) => {
    try {
      console.log('getUserData function is being called.'); // Agregar esta línea
      // Obtener los datos del usuario desde la base de datos o cualquier otra fuente
      const userData = await fetchUserData(); // Supongamos que existe una función para obtener los datos del usuario
      dispatch({ type: 'GET_USER_DATA_SUCCESS', payload: userData });
    } catch (error) {
      dispatch({ type: 'GET_USER_DATA_ERROR', payload: error.message });
    }
  };
};
