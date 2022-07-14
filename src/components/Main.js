import React from "react";
import "../blocks/main.css";
import { api } from "../utilis/Api";
import Card from "./Card";
export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <img className="profile__avatar-image" src={userAvatar} alt="profile" />
        <button
          className="profile__overlay"
          onClick={props.onEditAvatarClick}
        ></button>
        <div className="profile__info">
          <div className="profile__top-info">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              className="profile__edit-button"
              type="button"
              id="profilePopup__edit-button"
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              caption={card.name}
              likeCounter={card.likes.length}
              onCardClick={props.onCardClick}
              onDeleteClick={props.onDeleteClick}
            />
          );
        })}
      </section>
    </main>
  );
}
