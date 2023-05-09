import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNIfHTQY9LNlx5y71AoLhs5MUuLwJeF-8',
  authDomain: 'music-3ea4c.firebaseapp.com',
  projectId: 'music-3ea4c',
  storageBucket: 'music-3ea4c.appspot.com',
  appId: '1:990451646499:web:ef48394875108fc90e7196'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
