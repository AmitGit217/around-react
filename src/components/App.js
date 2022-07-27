import React, { useState, useEffect } from "react";
import { api } from "../utilis/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardContext from "../contexts/CardContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [cards, setCards] = useState([]);
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
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => console.log(err));
  }
  function handleDelete(card) {
    api
      .deleteCard(card._id)
      .then((res) => {
        setCards((state) => {
          state.filter((currentCard) => {
            // return currentCard._id !== card._id (Any card that is not the deleted card)
          });
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CardContext.Provider value={cards}>
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
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
          <Header />

          <Main
            onAddPlaceClick={openAddPlacePopup}
            onEditProfileClick={openEditProfile}
            onEditAvatarClick={openEditAvatarPicture}
            onCardClick={handleCardClick}
            onLike={handleCardLike}
            onDeleteClick={handleDelete}
            // onDeleteClick={openRemovePopup}
            cards={cards}
          />
          <Footer />
        </CardContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
