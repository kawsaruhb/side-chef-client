// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrCpNp7PPiAoU_b9dj6xdETGHsRAQ8hWk",
  authDomain: "side-chef-client.firebaseapp.com",
  projectId: "side-chef-client",
  storageBucket: "side-chef-client.appspot.com",
  messagingSenderId: "241543453914",
  appId: "1:241543453914:web:26c746719ec3d2cb5219e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;