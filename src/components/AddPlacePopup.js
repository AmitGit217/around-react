import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="addImage"
      title="New place"
      submitText="Create"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          name="caption"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          required
        />
        <span className="popup__input-error caption-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          type="url"
          name="image"
          placeholder="Image Link"
          required
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
