import "../blocks/popup.css";
import React from "react";

export default function PopupWithForm(props) {
  const isOpen = props.isOpen;
  return (
    <div
      className={`popup popup_type_${props.name} ${isOpen ? "popup_show" : ""}`}
    >
      <div className="popup__wrapper">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <form className="popup__form" noValidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__submit" type="submit">
            {props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
