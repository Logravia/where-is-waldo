import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase-config'
import { getFirestore } from "firebase/firestore";

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export {app, db, analytics}
