import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { CardContext, CardToRemoveContext } from "../contexts/CardContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import RemoveCardPopup from "./RemoveCardPopup";

function App() {
    const [cards, setCards] = useState([]);
    const [cardToRemove, setCardToRemove] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isRemovePopupOpen, setRemovePopup] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({
        name: "",
        link: "",
    });

    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
        setRemovePopup(false);
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

    function handleCardClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard({ name: card.name, link: card.link });
    }
    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => console.log(err));
    }, []);

    function handleUserUpdate({ name, about }) {
        api.setUserInfo({ name, about })
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }
    function handleAvatarUpdate({ avatar }) {
        api.updateAvatarImage({ avatar })
            .then((res) => {
                setCurrentUser(res);
            })
            .then(closeAllPopups())
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => console.log(err));
    }, []);
    function handleCardLike(card) {
        const isLiked = card.likes.some((user) => user._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((currentCard) =>
                        currentCard._id === card._id ? newCard : currentCard
                    )
                );
            })
            .catch((err) => console.log(err));
    }

    function handleRemovePopup(card) {
        setRemovePopup(true);
        setCardToRemove(card);
    }
    function handleSubmitRemove(card) {
        api.deleteCard(card._id)
            .then((res) => {
                setCards((cards) =>
                    cards.filter((cardToStay) => cardToStay._id !== card._id)
                );
            })
            .then(closeAllPopups())
            .catch((err) => console.log(err));
    }

    function handleCardsUpdate({ name, link }) {
        api.addCard({ name, link })
            .then((res) => {
                setCards([res, ...cards]);
            })
            .then(closeAllPopups())
            .catch((err) => console.log(err));
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CardContext.Provider value={cards}>
                <CardToRemoveContext.Provider value={cardToRemove}>
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                        isOpen={isImagePopupOpen}
                    />
                    <RemoveCardPopup
                        onClose={closeAllPopups}
                        onSubmitHandler={handleSubmitRemove}
                        isOpen={isRemovePopupOpen}
                    />

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
                        onCardsUpdate={handleCardsUpdate}
                    />

                    <Header />

                    <Main
                        onAddPlaceClick={openAddPlacePopup}
                        onEditProfileClick={openEditProfile}
                        onEditAvatarClick={openEditAvatarPicture}
                        onCardClick={handleCardClick}
                        onLike={handleCardLike}
                        onDeleteClick={handleRemovePopup}
                        onDeleteSubmit={handleSubmitRemove}
                        cards={cards}
                    />

                    <Footer />
                </CardToRemoveContext.Provider>
            </CardContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
