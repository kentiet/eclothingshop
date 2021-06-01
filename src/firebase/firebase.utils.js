import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAkmf9CKRcUc__WaAbOTUKY4fuzy5oFIT8",
    authDomain: "clothing-db-e8cfe.firebaseapp.com",
    projectId: "clothing-db-e8cfe",
    storageBucket: "clothing-db-e8cfe.appspot.com",
    messagingSenderId: "356564746880",
    appId: "1:356564746880:web:f3b011ac5239840539dc65",
    measurementId: "G-WTYDHNQQ61"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;