import React, { useState } from "react";
import Modal from "react-modal";
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

// Configura o modal
Modal.setAppElement("#root");

function ConfirmButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [accompanied, setAccompanied] = useState(false);
  const [numberOfAccompanied, setNumberOfAccompanied] = useState(0);

  async function saveConfirmation() {
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
        accompanied: accompanied ? numberOfAccompanied : 0,
        timestamp: new Date(),
      });
      console.log("Confirmação registrada com ID:", docRef.id);
      alert("Confirmação registrada com sucesso!");
      setModalIsOpen(false);
      setName("");
      setAccompanied(false);
      setNumberOfAccompanied(0);
    } catch (e) {
      console.error("Erro ao adicionar documento:", e);
      alert("Erro ao confirmar presença: " + e.message);
    }
  }

  return (
    <div className="confirm-button">
      <button onClick={() => setModalIsOpen(true)}>Clique aqui</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirmação de Presença"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Confirmar Presença</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveConfirmation();
          }}
        >
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={accompanied}
              onChange={(e) => setAccompanied(e.target.checked)}
            />
            <label>Acompanhantes</label>
          </div>
          {accompanied && (
            <label>
              Quantos?
              <input
                required
                type="number"
                min="0"
                value={numberOfAccompanied}
                onChange={(e) =>
                  setNumberOfAccompanied(parseInt(e.target.value, 10))
                }
              />
            </label>
          )}
          <div className="button-group">
            <button type="submit">Enviar</button>
            <button type="button" onClick={() => setModalIsOpen(false)}>
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ConfirmButton;
