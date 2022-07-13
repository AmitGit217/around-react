import React from "react";
import "../blocks/main.css";
import { api } from "./Api";
export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
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
        <img
          className="profile__avatar-image"
          src={userAvatar}
          alt="profile-image"
        />
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
      <section className="elements">{props.children}</section>
    </main>
  );
}
