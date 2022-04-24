import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKQKwKrUb6TnhvbHkLfaq-aX9Ik46Q6OM",
  authDomain: "appteste-a9b70.firebaseapp.com",
  projectId: "appteste-a9b70",
  storageBucket: "appteste-a9b70.appspot.com",
  messagingSenderId: "753856733321",
  appId: "1:753856733321:web:97a2d984c3785263246658",
  measurementId: "G-QNL6CZ961V"
};
  
    if(!firebase.apps.length){
       firebase.initializeApp(firebaseConfig);
      }

export default firebase;