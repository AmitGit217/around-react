import React from "react";
import { useEffect, useState } from "react";
import "../blocks/main.css";
import Card from "./Card";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardContext from "../contexts/CardContext";
import { api } from "../utilis/Api";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const { name, about, avatar } = useContext(CurrentUserContext);
  const currentUser = useContext(CurrentUserContext);

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
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardContext.Provider value={cards}>
      <main className="main">
        <section className="profile">
          <img className="profile__avatar-image" alt="profile" src={avatar} />
          <button
            className="profile__overlay"
            onClick={props.onEditAvatarClick}
          />
          <div className="profile__info">
            <div className="profile__top-info">
              <h1 className="profile__name">{name}</h1>
              <button
                onClick={props.onEditProfileClick}
                className="profile__edit-button"
                type="button"
                id="profilePopup__edit-button"
              />
            </div>
            <p className="profile__description">{about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlaceClick}
          />
        </section>
        <section className="elements">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                link={card.link}
                name={card.name}
                likeCounter={card.likes.length}
                onCardClick={props.onCardClick}
                // onDeleteClick={props.onDeleteClick}
                onLike={handleCardLike}
                onDeleteClick={handleDelete}
              />
            );
          })}
        </section>
      </main>
    </CardContext.Provider>
  );
}
