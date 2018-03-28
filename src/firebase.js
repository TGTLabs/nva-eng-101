// Import the Firebase modules that you need in your app.
import * as firebase from 'firebase';

// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyDPv9PwYQmdHIP2ghVxzr_aaE4RS9ToZq8",
  authDomain: "nva-eng-101.firebaseapp.com",
  databaseURL: "https://nva-eng-101.firebaseio.com",
  projectId: "nva-eng-101",
  storageBucket: "nva-eng-101.appspot.com",
  messagingSenderId: "752880676258"
};
export default firebase.initializeApp(config);
