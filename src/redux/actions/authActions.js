/* // Importa las funciones necesarias de Firebase para la autenticación
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

// Define las acciones para la autenticación
export const registerWithEmail = (email, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch({ type: 'REGISTER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: error.message });
    }
  };
};

export const signInWithEmail = (email, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
  };
};

export const signOutUser = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'LOGOUT_ERROR', payload: error.message });
    }
  };
};
 */


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { set, ref } from 'firebase/database';
import { auth, database } from '../../firebaseConfig';

export const registerWithEmail = (name, email, password) => {
  return async (dispatch) => {
    try {
      // Registrar el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar el nombre de usuario en Firebase Realtime Database
      await set(ref(database, `users/${user.uid}`), {
        name: name,
      });

      dispatch({ type: 'REGISTER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: error.message });
    }
  };
};
