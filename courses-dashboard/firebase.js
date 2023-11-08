// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGyNjH8WkfNfu8-c8O5Moz6UcuENmTfRI",
  authDomain: "student-dashboard-68331.firebaseapp.com",
  databaseURL: "https://student-dashboard-68331-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-dashboard-68331",
  storageBucket: "student-dashboard-68331.appspot.com",
  messagingSenderId: "123968405006",
  appId: "1:123968405006:web:8c47bbc6ff0e520f27865f",
  measurementId: "G-VK53LDS8NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const database = getDatabase(app);
const auth=getAuth(app);
export {database ,  auth, storage}