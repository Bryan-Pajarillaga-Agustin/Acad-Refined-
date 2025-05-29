import { deleteApp, initializeApp } from "firebase/app"
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig_1 = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
    projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
}

const firebaseConfig_2 = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY_2,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN_2,
    databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL_2,
    projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID_2 ,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET_2,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID_2,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID_2,
    measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID_2
}


// Initialize Firebase - 1
export const firebase_1 = initializeApp(firebaseConfig_1, "FIRST_APP")
export const db = getFirestore(firebase_1)
export const auth = getAuth(firebase_1)

export const firebase_2 = initializeApp(firebaseConfig_2, "SECOND_APP")
export const cloudDB = getStorage(firebase_2)
// Get a reference to the database service