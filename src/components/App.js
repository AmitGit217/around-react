import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });
  const [isRemoveCardOpen, setRemoveCardOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setRemoveCardOpen(false);
  }
  function openEditProfile() {
    setEditProfilePopupOpen(true);
  }
  function openAddPlacePopup() {
    setAddPlacePopupOpen(true);
  }
  function openEditAvatarPicture() {
    setEditAvatarPopupOpen(true);
  }
  function openRemovePopup(card) {
    setRemoveCardOpen(true);
    return card;
  }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard({ name: card.name, link: card.link });
  }
  return (
    <>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
      <PopupWithForm
        name="confirm"
        title="Are you sure?"
        submitText="Yes"
        onClose={closeAllPopups}
        isOpen={isRemoveCardOpen}
      />
      <PopupWithForm
        name="editAvatar"
        title="Change profile picture"
        submitText="Save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm
        name="editProfileText"
        title="Edit profile"
        submitText="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="popup__input-error name-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__input"
            name="job"
            type="text"
            placeholder="Description"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="popup__input-error job-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="addImage"
        title="New place"
        submitText="Create"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
      <Header />
      <Main
        onAddPlaceClick={openAddPlacePopup}
        onEditProfileClick={openEditProfile}
        onEditAvatarClick={openEditAvatarPicture}
        onCardClick={handleCardClick}
        onDeleteClick={openRemovePopup}
      />
      <Footer />
    </>
  );
}

export default App;
