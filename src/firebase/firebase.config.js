// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWfRTKDPCg_wz5hgtLv3n9b_77Jk0dbUE",
  authDomain: "chef-crew-client.firebaseapp.com",
  projectId: "chef-crew-client",
  storageBucket: "chef-crew-client.appspot.com",
  messagingSenderId: "1023165640845",
  appId: "1:1023165640845:web:94639fcdc1930ce7f1f2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;