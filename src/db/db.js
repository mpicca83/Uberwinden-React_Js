// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

//Agregar esto
import { getFirestore, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKvMiZDSZUsh9rSq0K8Z5OJavxNIzJOn8",
  authDomain: "uberwinden-7b0cb.firebaseapp.com",
  projectId: "uberwinden-7b0cb",
  storageBucket: "uberwinden-7b0cb.appspot.com",
  messagingSenderId: "571790186890",
  appId: "1:571790186890:web:4391adea7c2baeee9e5073"
}

// Initialize Firebase
initializeApp(firebaseConfig)

//Agregar esto
export const db = getFirestore()
export const orderCollections = collection(db, 'compra')