import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    REQUIRED,
    MIN_TWO,
    MAX_LENGTH,
    MUST_BE_VALID_URL,
} from "../lib/consts";

function AddPlacePopup({ isOpen, onClose, onCardsUpdate, submitText }) {
    const addCardForm = useFormik({
        initialValues: {
            name: "",
            link: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required(REQUIRED)
                .min(2, MIN_TWO)
                .max(30, MAX_LENGTH),
            link: Yup.string().url(MUST_BE_VALID_URL).required(REQUIRED),
        }),
        onSubmit: (values, { resetForm }) => {
            onCardsUpdate({
                name: values.name,
                link: values.link,
            });
            resetForm({ values: "" });
        },
    });

    function thereIsErrors(obj) {
        return Object.keys(obj).length !== 0;
    }

    return (
        <PopupWithForm
            name='addImage'
            title='New place'
            submitText={submitText || "Create"}
            submitStateIsError={thereIsErrors(addCardForm.errors)}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={addCardForm.handleSubmit}>
            <label className='popup__field'>
                <input
                    onChange={addCardForm.handleChange}
                    value={addCardForm.values.name}
                    className='popup__input'
                    type='text'
                    name='name'
                    placeholder='Title'
                />
                {addCardForm.errors.name && (
                    <span className='popup__input-error popup__input_type_error'>
                        {addCardForm.errors.name}
                    </span>
                )}
            </label>
            <label className='popup__field'>
                <input
                    onChange={addCardForm.handleChange}
                    value={addCardForm.values.link}
                    className='popup__input'
                    type='url'
                    name='link'
                    placeholder='Image Link'
                    required
                />
                {addCardForm.errors.link && (
                    <span className='popup__input-error popup__input_type_error'>
                        {addCardForm.errors.link}
                    </span>
                )}
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;
