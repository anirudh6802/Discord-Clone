import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBpqWwZ3RjWtvoZdzUMyGFyqNkceJyWheU",
    authDomain: "discord-clone-yt-3a6b1.firebaseapp.com",
    projectId: "discord-clone-yt-3a6b1",
    storageBucket: "discord-clone-yt-3a6b1.appspot.com",
    messagingSenderId: "306170351885",
    appId: "1:306170351885:web:9244b84fa5d7b6bc68e044",
    measurementId: "G-1JDV1FC9WC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export{auth, provider};
  export default db;

