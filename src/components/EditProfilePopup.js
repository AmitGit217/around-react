import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REQUIRED, MIN_TWO, MAX_LENGTH } from "../lib/consts";
import thereIsErrors from "../utils/formError";

function EditProfilePopup({ isOpen, onClose, onUserUpdate, submitText }) {
    const currentUser = useContext(CurrentUserContext);
    const { name, about } = currentUser;
    const editProfileForm = useFormik({
        initialValues: {
            name,
            about,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required(REQUIRED)
                .min(2, MIN_TWO)
                .max(30, MAX_LENGTH),
            about: Yup.string()
                .required(REQUIRED)
                .min(2, MIN_TWO)
                .max(30, MAX_LENGTH),
        }),
        onSubmit: (values) => {
            onUserUpdate({
                name: values.name,
                about: values.about,
            });
        },
    });

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={editProfileForm.handleSubmit}
            name='editProfileText'
            title='Edit profile'
            submitText={submitText || "Save"}>
            <label className='popup__field'>
                <input
                    className='popup__input'
                    name='name'
                    type='text'
                    placeholder='Full Name'
                    minLength={2}
                    maxLength={40}
                    required
                    value={editProfileForm.values.name}
                    onChange={editProfileForm.handleChange}
                />
                {editProfileForm.errors.name && (
                    <span className='popup__input-error popup__input_type_error'>
                        {editProfileForm.errors.name}
                    </span>
                )}
            </label>
            <label className='popup__field'>
                <input
                    className='popup__input'
                    name='about'
                    type='text'
                    placeholder='Description'
                    minLength={2}
                    maxLength={200}
                    required
                    value={editProfileForm.values.about}
                    onChange={editProfileForm.handleChange}
                />
                {editProfileForm.errors.about && (
                    <span className='popup__input-error popup__input_type_error'>
                        {editProfileForm.errors.about}
                    </span>
                )}
            </label>
            <button
                className={`popup__submit ${
                    thereIsErrors(editProfileForm.errors)
                        ? `popup__submit-button_inactive`
                        : ""
                }`}
                type='submit'
                disabled={thereIsErrors(editProfileForm.errors) ? true : false}>
                {submitText || "Save"}
            </button>
        </PopupWithForm>
    );
}

export default EditProfilePopup;
