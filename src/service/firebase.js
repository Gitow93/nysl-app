import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nysl-app-8cd7e.firebaseapp.com",
  databaseURL: "https://nysl-app-8cd7e.firebaseio.com",
  projectId: "nysl-app-8cd7e",
  storageBucket: "nysl-app-8cd7e.appspot.com",
  appId: "nysl-app-8cd7e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  return auth.signOut();
};
