// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSg09gJsFeNxh3LlA2LKvYShbImxVfXI",
  authDomain: "the-news-dragon-c7a43.firebaseapp.com",
  projectId: "the-news-dragon-c7a43",
  storageBucket: "the-news-dragon-c7a43.appspot.com",
  messagingSenderId: "233164230141",
  appId: "1:233164230141:web:685a17a5f602c62e8e1d94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;