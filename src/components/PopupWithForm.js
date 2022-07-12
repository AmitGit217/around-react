import "../blocks/popup.css";
import React from "react";

export default function PopupWithForm(props) {
  const fullForm = props.fullForm;
  const isOpen = props.isOpen;

  return (
    <>
      {fullForm ? (
        <div
          className={`popup popup_type_${props.name} ${
            isOpen ? "popup_show" : ""
          }`}
        >
          <div className="popup__wrapper">
            <button
              className="popup__closeButton"
              type="button"
              onClick={props.onClose}
            ></button>
            <form className="popup__form form" name={props.name} noValidate>
              <h2 className="popup__title">{props.title}</h2>
              <label className="popup__field">
                <input
                  className={`popup__input popup__input_type_${props.firstInputType}}`}
                  type={props.firstInputType}
                  name={props.firstInputName}
                  placeholder={props.firstInputPlaceHolder}
                  minLength={props.firstInputMinLength}
                  maxLength={props.firstInputMaxLength}
                  required
                />
                <span
                  className={`popup__input-error inputError_${props.firstInputName}`}
                ></span>
              </label>
              <label className="popup__field">
                <input
                  className={`popup__input popup__input_type_${props.secondInputType}}`}
                  type={props.secondInputType}
                  name={props.secondInputName}
                  placeholder={props.secondInputPlaceHolder}
                  minLength={props.secondInputMinLength}
                  maxLength={props.secondInputMaxLength}
                  required
                />
                <span
                  className={`popup__input-error inputError_${props.secondInputName}`}
                ></span>
              </label>
              <button type="submit" className="popup__submit-button">
                {props.saveButtonText}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <form
          className={`popup ${isOpen ? "popup_show" : ""} `}
          name={props.name}
          noValidate
        >
          <div
            className={`popup_type_${props.name}  popup__confirm-wrapper popup__wrapper `}
          >
            <button
              className="popup__closeButton"
              type="button"
              onClick={props.onClose}
            ></button>
            <h2 className="popup__title">{props.title}</h2>
            <button type="submit" className="popup__submit-button">
              Yes
            </button>
          </div>
        </form>
      )}
    </>
  );
}
