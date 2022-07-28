import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUserUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const { name, about } = currentUser;
  const [userInfo, setUserInfo] = useState({ name, about });

  function handleTextChange(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  useEffect(() => {
    setUserInfo({ name, about });
  }, [name, about]);

  function handleSubmit(e) {
    e.preventDefault();
    onUserUpdate({
      name: userInfo.name,
      about: userInfo.about,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="editProfileText"
      title="Edit profile"
      submitText="Save"
    >
      <label className="popup__field">
        <input
          className="popup__input"
          name="name"
          type="text"
          placeholder="Full Name"
          minLength={2}
          maxLength={40}
          required
          value={userInfo.name || ""}
          onChange={handleTextChange}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          name="about"
          type="text"
          placeholder="Description"
          minLength={2}
          maxLength={200}
          required
          value={userInfo.about || ""}
          onChange={handleTextChange}
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
