// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3OtOqRYtSZJv99tcxCNFLlMqtbvAI7xE",
  authDomain: "bookshelf-9075d.firebaseapp.com",
  projectId: "bookshelf-9075d",
  storageBucket: "bookshelf-9075d.appspot.com",
  messagingSenderId: "617754284040",
  appId: "1:617754284040:web:178d8d91b9a836a66301bd",
  measurementId: "G-W4EDDC4H72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;