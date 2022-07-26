import React, { useState, useEffect } from "react";
import { api } from "../utilis/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CardContext from "../contexts/CardContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = useState([]);
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
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(() => {
          return {
            name: res.name,
            about: res.about,
            avatar: res.avatar,
          };
        });
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);
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
      <CurrentUserContext.Provider value={currentUser}>
        <CardContext.Provider value={cards}>
          <Main
            onAddPlaceClick={openAddPlacePopup}
            onEditProfileClick={openEditProfile}
            onEditAvatarClick={openEditAvatarPicture}
            onCardClick={handleCardClick}
            onDeleteClick={openRemovePopup}
          />
        </CardContext.Provider>
      </CurrentUserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
