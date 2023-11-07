import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//+ Initialize Firebase App
const firebaseConfig = {
  apiKey: "AIzaSyDsT1ho--9ddi3-pI27Yxi6_un75kJZRyg",
  authDomain: "mapsapp-cb97f.firebaseapp.com",
  projectId: "mapsapp-cb97f",
  storageBucket: "mapsapp-cb97f.appspot.com",
  messagingSenderId: "287387102508",
  appId: "1:287387102508:web:89be6c2388ee04afc8d089",
  measurementId: "G-QY7YNTN106"
};

const app = initializeApp(firebaseConfig);

//+ Initialize Firestore
const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db, app };
