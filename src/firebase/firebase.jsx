import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD4NGpKbfO2FXRmTYFy_OW9sU7Y6BsrUFk",
    authDomain: "netflix-clone-80751.firebaseapp.com",
    projectId: "netflix-clone-80751",
    storageBucket: "netflix-clone-80751.appspot.com",
    messagingSenderId: "977210613932",
    appId: "1:977210613932:web:03e8ff276874b4c6227f09",
    measurementId: "G-LX35XE95H1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;