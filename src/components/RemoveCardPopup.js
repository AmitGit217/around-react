import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CardToDeleteContext from "../contexts/CardToDeleteContext";

function RemoveCardPopup({ onClose, isOpen, onCardDeleteUpdate }) {
  const cardToDeleteCtx = useContext(CardToDeleteContext);

  function handleSubmit(e) {
    e.preventDefault();
    onCardDeleteUpdate(cardToDeleteCtx);
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Are you sure?"
      submitText="Yes"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    />
  );
}

export default RemoveCardPopup;
