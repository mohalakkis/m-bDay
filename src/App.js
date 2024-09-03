import React from "react";
import InvitationCard from "./components/ InvitationCard";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyYXn_vHENH2YvAAfdOeVBxrFCuKMHIxI",
  authDomain: "my-bday-20af1.firebaseapp.com",
  projectId: "my-bday-20af1",
  storageBucket: "my-bday-20af1.appspot.com",
  messagingSenderId: "746681276979",
  appId: "1:746681276979:web:5775142d6aee56fdb56146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function saveConfirmation() {
  console.log("teste");
  try {
    // Adiciona um novo documento à coleção "confirmations"
    const docRef = await addDoc(collection(db, "confirmations"), {
      confirmed: true,
      timestamp: new Date(),
    });
    console.log("Confirmação registrada com ID:", docRef.id);
    alert("Confirmação registrada!");
  } catch (e) {
    console.error("Erro ao adicionar documento:", e);
    alert("Erro ao confirmar presença: " + e.message);
  }
}

export default function App() {
  return (
    <div className="App">
      <InvitationCard onConfirm={saveConfirmation} />
    </div>
  );
}
