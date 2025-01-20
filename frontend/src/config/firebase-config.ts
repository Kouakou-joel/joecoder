import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMjITpuoiq1_LqsIKbf_jGNVafY4j7nJA",
  authDomain: "joecoder-29421.firebaseapp.com",
  projectId: "joecoder-29421",
  storageBucket: "joecoder-29421.firebasestorage.app",
  messagingSenderId: "348767113900",
  appId: "1:348767113900:web:9af2ab6b6af8d98ca8c509"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage= getStorage(app);
