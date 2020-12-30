import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBIl3h1-VwsWofz2bOGQo5LrO9hiyUt3t4',
  authDomain: 'cici-beauty-place.firebaseapp.com',
  projectId: 'cici-beauty-place',
  storageBucket: 'cici-beauty-place.appspot.com',
  messagingSenderId: '420739807008',
  appId: '1:420739807008:web:2dad903a1ee712a69c4945',
  measurementId: 'G-2SJ07T23V6',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap: any) => snap.user)
}

export function loginWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap: any) => snap.user)
}

export function signOutGoogle() {
  firebase.auth().signOut()
}
