import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNIfHTQY9LNlx5y71AoLhs5MUuLwJeF-8',
  authDomain: 'music-3ea4c.firebaseapp.com',
  projectId: 'music-3ea4c',
  storageBucket: 'music-3ea4c.appspot.com',
  messagingSenderId: '990451646499',
  appId: '1:990451646499:web:ef48394875108fc90e7196'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage

// Keep copy of db on browser for user, helps keep the user experience running if a issue occurs
db.enablePersistence().catch((error) => {
  console.log(`Firebase Persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
