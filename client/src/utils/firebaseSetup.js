import firebase from "firebase";
import { firebaseConfig } from "../config";

const firebaseClient = firebase.initializeApp(firebaseConfig);

export default firebaseClient;