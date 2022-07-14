import React from "react";
import "../blocks/main.css";
import { api } from "../utilis/Api";
import Card from "./Card";
import { useEffect, useState } from "react";
export default function Main(props) {
  const [user, setUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUser(() => {
          return {
            name: res.name,
            about: res.about,
            avatar: res.avatar,
          };
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__avatar-image"
          src={user.avatar}
          alt="profile"
        />
        <button
          className="profile__overlay"
          onClick={props.onEditAvatarClick}
        ></button>
        <div className="profile__info">
          <div className="profile__top-info">
            <h1 className="profile__name">{user.name}</h1>
            <button
              onClick={props.onEditProfileClick}
              className="profile__edit-button"
              type="button"
              id="profilePopup__edit-button"
            ></button>
          </div>
          <p className="profile__description">{user.about}</p>
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
