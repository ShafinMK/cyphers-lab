import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const initalizeAuthentication =() =>{
    initializeApp(firebaseConfig);
}

export default initalizeAuthentication;