import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onAvatarUpdate }) {
  const avatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAvatarUpdate({
      avatar: avatar.current.value,
    });
    e.target.reset();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="editAvatar"
      title="Change profile picture"
      submitText="Save"
    >
      <label className="popup__field">
        <input
          ref={avatar}
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