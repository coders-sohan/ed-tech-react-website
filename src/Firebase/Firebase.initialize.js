import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitializeAuth = () => {
	initializeApp(firebaseConfig);
};

export default firebaseInitializeAuth;
