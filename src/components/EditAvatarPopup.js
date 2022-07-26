import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="editAvatar"
      title="Change profile picture"
      submitText="Save"
    >
      <label className="popup__field">
        <input
          className="popup__input"
          type="url"
          name="url-input"
          placeholder="Image Link"
          required
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
