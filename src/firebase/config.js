import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCRwWd1E7JJiSuHK-J3FRXj8wjK3-WO84E",
    authDomain: "reactdemojuly2024.firebaseapp.com",
    projectId: "reactdemojuly2024",
    storageBucket: "reactdemojuly2024.appspot.com",
    messagingSenderId: "140474381397",
    appId: "1:140474381397:web:314537f93c0cd60f1090dc"
};

  initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export {db, auth}