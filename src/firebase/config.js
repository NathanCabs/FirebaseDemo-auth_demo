import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWKND510GjHx8QbeH1UdAXMF2ibnuBUCo",
  authDomain: "fir-project-915b0.firebaseapp.com",
  projectId: "fir-project-915b0",
  storageBucket: "fir-project-915b0.appspot.com",
  messagingSenderId: "330676880081",
  appId: "1:330676880081:web:b696e3ab5c39a2580a3bf0",
  measurementId: "G-XDZZKZQMGD" 
};

  initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export {db, auth}