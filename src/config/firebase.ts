// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNgHLye7DtFxfQB7EjKyx2yTHvjSgfuM8",
  authDomain: "riyu-nutrition.firebaseapp.com",
  projectId: "riyu-nutrition",
  storageBucket: "riyu-nutrition.appspot.com",
  messagingSenderId: "97407763093",
  appId: "1:97407763093:web:19dc840cc029cd65a8519c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export default app
export { auth }