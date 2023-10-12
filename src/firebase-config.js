import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyv9J5kUSJTcmhLgQQm8Xt2OD6MNc8u4M",
  authDomain: "colegio-46763.firebaseapp.com",
  projectId: "colegio-46763",
  storageBucket: "colegio-46763.appspot.com",
  messagingSenderId: "824969496766",
  appId: "1:824969496766:web:baee0a2c6d4afc8f7eb6ef"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);