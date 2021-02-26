import React from 'react';
import Landing from '../Landing/Landing';
import TopBar from '../TopBar/TopBar';
import Spinner from '../Spinner/Spinner';
import './App.scss';

// firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth';

// firebase config
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDZ6wzSZNpT3asLrbNE_txSNfy72PwkJo8",
    authDomain: "react-fire-chat-306017.firebaseapp.com",
    projectId: "react-fire-chat-306017",
    storageBucket: "react-fire-chat-306017.appspot.com",
    messagingSenderId: "810600904438",
    appId: "1:810600904438:web:54849c5b00ab0fc1079ed7",
    measurementId: "G-4NE570K0V6"
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
// const firestore = firebase.firestore();

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="app">
      <TopBar user={auth.currentUser} onSignOut={() => auth.signOut()} />
      <section>
        {loading ? <Spinner /> : error ? null : user ? <ChatRoom /> : <Landing onSignIn={signInWithGoogle} />}
      </section>
    </div>
  );
}

const ChatRoom = () => {
  return (
    <div>Chat room</div>
  );
}

export default App;
