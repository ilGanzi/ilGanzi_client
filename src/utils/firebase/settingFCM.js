// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqtb32_BHwehEv8JqWMgymIRfsXpErBrc",
  authDomain: "mirthon-cf4e7.firebaseapp.com",
  projectId: "mirthon-cf4e7",
  storageBucket: "mirthon-cf4e7.appspot.com",
  messagingSenderId: "80958394590",
  appId: "1:80958394590:web:58b38b8e70903f06d2f24f",
  measurementId: "G-LYR97K0CP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);