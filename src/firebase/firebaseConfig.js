/* import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDoVe9oDgDBM_VDBNtSREPhsoFkxNWcMJg",
  authDomain: "cuaderno-de-campo-a8d4b.firebaseapp.com",
  projectId: "cuaderno-de-campo-a8d4b",
  storageBucket: "cuaderno-de-campo-a8d4b.appspot.com",
  messagingSenderId: "638729910277",
  appId: "1:638729910277:web:385e57b93b9ae45380c46c"
};

// Inicializar Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Obtener las instancias necesarias de Firebase (por ejemplo, para autenticación y Firestore)
const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database();

export { auth, firestore, database };
 */


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoVe9oDgDBM_VDBNtSREPhsoFkxNWcMJg",
  authDomain: "cuaderno-de-campo-a8d4b.firebaseapp.com",
  projectId: "cuaderno-de-campo-a8d4b",
  storageBucket: "cuaderno-de-campo-a8d4b.appspot.com",
  messagingSenderId: "638729910277",
  appId: "1:638729910277:web:385e57b93b9ae45380c46c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
