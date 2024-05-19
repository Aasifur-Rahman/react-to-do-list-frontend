// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmpA7JovVej4PF4l0WL5HssMgh5AH9uoo",
  authDomain: "to-do-app-5c960.firebaseapp.com",
  projectId: "to-do-app-5c960",
  storageBucket: "to-do-app-5c960.appspot.com",
  messagingSenderId: "357289858107",
  appId: "1:357289858107:web:4530e8887ce6546a2f781e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
