import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CardToRemoveContext } from "../contexts/CardContext";

function RemoveCardPopup({ onClose, isOpen, onSubmitHandler, submitText }) {
    const currentCard = useContext(CardToRemoveContext);
    function handleSubmit(e) {
        e.preventDefault();
        onSubmitHandler(currentCard);
    }

    return (
        <PopupWithForm
            name='confirm'
            title='Are you sure?'
            submitText={submitText || "Yes"}
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}
        />
    );
}

export default RemoveCardPopup;
