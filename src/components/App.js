import React, { useState, useEffect } from "react";
import { api } from "../utilis/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });
  // const [isRemoveCardOpen, setRemoveCardOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    // setRemoveCardOpen(false);
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
  // function openRemovePopup(card) {
  //   setRemoveCardOpen(true);
  //   return card;
  // }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard({ name: card.name, link: card.link });
  }
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUserUpdate({ name, about }) {
    api
      .setUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleAvatarUpdate({ avatar }) {
    api
      .updateAvatarImage({ avatar })
      .then((res) => {
        setCurrentUser(res);
      })
      .then(closeAllPopups())
      .catch((err) => console.log(err));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
        {/* <PopupWithForm
        name="confirm"
        title="Are you sure?"
        submitText="Yes"
        onClose={closeAllPopups}
        isOpen={isRemoveCardOpen}
      /> */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onAvatarUpdate={handleAvatarUpdate}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUserUpdate={handleUserUpdate}
        />
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
          // onDeleteClick={openRemovePopup}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
