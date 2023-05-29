import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Miguelito NUEVO Usuario registrado:", user);
  } catch (error) {
    console.log("Error al registrar usuario:", error);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Miguelito NUEVO Usuario inició sesión:", user);
  } catch (error) {
    console.log("Miguelito NUEVO Error al iniciar sesión:", error);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    console.log('Usuario ha cerrado sesión exitosamente');
  } catch (error) {
    console.log(error);
  }
};
