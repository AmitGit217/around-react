import React from "react";
import PopupWithForm from "./PopupWithForm";

function RemoveCardPopup({ onClose, isOpen }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <PopupWithForm
            name='confirm'
            title='Are you sure?'
            submitText='Yes'
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}
        />
    );
}

export default RemoveCardPopup;
