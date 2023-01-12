import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDiP6z3toiLoNgnmiNBWr5tUBz-iTKTJ4",
  authDomain: "form-d1259.firebaseapp.com",
  projectId: "form-d1259",
  storageBucket: "form-d1259.appspot.com",
  messagingSenderId: "943954674608",
  appId: "1:943954674608:web:6db624a5d977a7c3494c75",
  measurementId: "G-0LFVJ092HE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
