import React, { useState } from "react";
import Envelope from "./Envelope";
import ConfirmButton from "./ConfirmButton";
import "./InvitationCard.css";

function InvitationCard({ saveConfirmation }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="invitation-container">
      {!isOpen ? (
        <div className="invitation-card" onClick={handleCardClick}>
          <div className="card">
            <h2>Convite Especial</h2>
            <p>Clique para abrir o convite</p>
          </div>
        </div>
      ) : (
        <Envelope />
      )}

      {isOpen ? <ConfirmButton saveConfirmation={saveConfirmation} /> : null}
    </div>
  );
}

export default InvitationCard;
