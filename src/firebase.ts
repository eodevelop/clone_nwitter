// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAbZz84gCuECm3iXD16tELkERAQ1qpk06E',
  authDomain: 'nwitter-reloaded-c0e82.firebaseapp.com',
  projectId: 'nwitter-reloaded-c0e82',
  storageBucket: 'nwitter-reloaded-c0e82.appspot.com',
  messagingSenderId: '711832966417',
  appId: '1:711832966417:web:26f8d7e8cd71229cdea8b0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
