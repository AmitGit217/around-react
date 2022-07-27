import React from "react";
import "../blocks/main.css";
import Card from "./Card";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main(props) {
  const { name, about, avatar } = useContext(CurrentUserContext);

  return (
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
        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              name={card.name}
              likeCounter={card.likes.length}
              onCardClick={props.onCardClick}
              // onDeleteClick={props.onDeleteClick}
              onLike={props.onLike}
            />
          );
        })}
      </section>
    </main>
  );
}
