import "../blocks/popup.css";
import React from "react";

export default function PopupWithForm({
    isOpen,
    onClose,
    submitText,
    title,
    name,
    children,
    onSubmit,
    submitStateIsError,
}) {
    return (
        <div
            className={`popup popup_type_${name} ${
                isOpen ? "popup_show" : ""
            }`}>
            <div className={`popup__wrapper popup__wrapper_type_${name}`}>
                <button
                    className='popup__close-button'
                    type='button'
                    onClick={onClose}></button>
                <form className='popup__form' onSubmit={onSubmit}>
                    <h2 className='popup__title'>{title}</h2>
                    {children}
                    <button
                        className={`popup__submit ${
                            submitStateIsError
                                ? `popup__submit-button_inactive`
                                : ""
                        }`}
                        type='submit'
                        disabled={submitStateIsError ? true : false}>
                        {submitText}
                    </button>
                </form>
            </div>
        </div>
    );
}
