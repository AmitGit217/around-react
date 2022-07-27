import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onCardsUpdate }) {
  const [cardData, setCardData] = useState({ name: "", link: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCardsUpdate({
      name: cardData.name,
      link: cardData.link,
    });
  }

  return (
    <PopupWithForm
      name="addImage"
      title="New place"
      submitText="Create"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          onChange={handleChange}
          className="popup__input"
          type="text"
          name="name"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          required
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          onChange={handleChange}
          className="popup__input"
          type="url"
          name="link"
          placeholder="Image Link"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
