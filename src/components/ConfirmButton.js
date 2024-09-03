import React from "react";
import "./ConfirmButton.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAyYXn_vHENH2YvAAfdOeVBxrFCuKMHIxI",
  authDomain: "my-bday-20af1.firebaseapp.com",
  projectId: "my-bday-20af1",
  storageBucket: "my-bday-20af1.appspot.com",
  messagingSenderId: "746681276979",
  appId: "1:746681276979:web:5775142d6aee56fdb56146",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ConfirmButton() {
  async function saveConfirmation() {
    // Solicita o nome da pessoa
    const name = prompt("Por favor, insira seu nome:");

    // Verifica se o nome foi preenchido
    if (!name) {
      alert("Nome é obrigatório para confirmar a presença.");
      return;
    }

    try {
      // Adiciona um novo documento à coleção "confirmations"
      const docRef = await addDoc(collection(db, "confirmations"), {
        name: name,
        confirmed: true,
        timestamp: new Date(),
      });
      console.log("Confirmação registrada com ID:", docRef.id);
      alert("Confirmação registrada com sucesso!");
    } catch (e) {
      console.error("Erro ao adicionar documento:", e);
      alert("Erro ao confirmar presença: " + e.message);
    }
  }

  return (
    <div className="confirm-button">
      <button onClick={saveConfirmation}>Confirmar Presença</button>
    </div>
  );
}

export default ConfirmButton;
