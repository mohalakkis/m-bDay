import React, { useState } from "react";
import "./Envelope.css";
import ConfirmButton from "./ConfirmButton";

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="envelope-container">
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        <div onClick={handleClick} className="envelope-flap">
          <h1>Convite Especial</h1>
          <span>clique aqui.</span>
        </div>
        <div className="envelope-content">
          <h4>Você está Convidado!</h4>
          <p>Data: 07/09/2024</p>
          <p>Local: Rua Jequirana de goiais, 515</p>
          <p>Horário: 15h</p>
          <p>*traga sua bebida</p>

          <p>Por favor, confirme sua presença abaixo.</p>
          <ConfirmButton />
        </div>
      </div>
    </div>
  );
}

export default Envelope;
