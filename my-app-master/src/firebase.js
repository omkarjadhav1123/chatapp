// import firebase from 'firebase/app';

// import { initializeApp, getApps, getApp } from "firebase/app";
// const firebaseConfig = {
//     apiKey: "AIzaSyAOHffjJl5fKnJKBTID7N2TasPCZksP6SA",
//     authDomain: "chat-app-bc4b0.firebaseapp.com",
//     projectId: "chat-app-bc4b0",
//     storageBucket: "chat-app-bc4b0.appspot.com",
//     messagingSenderId: "607403817530",
//     appId: "1:607403817530:web:1591b1d5967520575cd303"
//   };

// const FirebaseApp = firebase.initializeApp(firebaseConfig);
// // const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export {auth, provider};

// const firebaseConfig = {
//   apiKey: "AIzaSyAOHffjJl5fKnJKBTID7N2TasPCZksP6SA",
//   authDomain: "chat-app-bc4b0.firebaseapp.com",
//   projectId: "chat-app-bc4b0",
//   storageBucket: "chat-app-bc4b0.appspot.com",
//   messagingSenderId: "607403817530",
//   appId: "1:607403817530:web:1591b1d5967520575cd303"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export  { auth, provider };


// import firebase from './firebase';

// import firebase from '../firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyAOHffjJl5fKnJKBTID7N2TasPCZksP6SA",
//   authDomain: "chat-app-bc4b0.firebaseapp.com",
//   projectId: "chat-app-bc4b0",
//   storageBucket: "chat-app-bc4b0.appspot.com",
//   messagingSenderId: "607403817530",
//   appId: "1:607403817530:web:1591b1d5967520575cd303"
// };

// const firebaseApp =firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export {auth,provider};



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrAqAePrv2262CjApv5jEI0vOvMFNywfk",
  authDomain: "whats-app-clone-3dafd.firebaseapp.com",
  projectId: "whats-app-clone-3dafd",
  storageBucket: "whats-app-clone-3dafd.appspot.com",
  messagingSenderId: "343604187191",
  appId: "1:343604187191:web:56050a374026ebef2e2fb2",
  measurementId: "G-14KZV3BB12"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
