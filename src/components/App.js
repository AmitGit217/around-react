import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopup(false);
  }
  function openEditProfile() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function openEditAvatar() {
    setEditAvatarPopup(!isEditAvatarPopupOpen);
  }
  return (
    <>
      <body className="page">
        <div className="popup popup_profile-image" id="edit-profile-image">
          <div className="popup__wrapper popup__wrapper_profile-image">
            <button
              className="popup__close-button popup__close-button_form"
              type="button"
            ></button>
            <form
              className="popup__form form popup__form_profile-image"
              id="editProfileImage"
              name="editProfileImage"
              noValidate
            >
              <h4 className="popup__title">Change profile picture</h4>
              <label className="popup__field">
                <input
                  className="popup__input popup__input_addPhoto_ImageURL"
                  type="url"
                  name="updateImageUrl"
                  placeholder="Image Link"
                  id="url-input-profile"
                  required
                />
                <span className="popup__input-error url-input-profile-error"></span>
              </label>
              <button
                className="popup__submit-button"
                type="submit"
                name="Save"
              >
                Save
              </button>
            </form>
          </div>
        </div>
        <PopupWithForm
          name="confirmDelete"
          title="Are you sure?"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          fullForm
          name="editProfileText"
          title="Edit profile"
          //First input props//
          firstInputName="name"
          firstInputType="text"
          firstInputPlaceHolder="Full Name"
          firstInputMinLength="2"
          firstInputMaxLength="40"
          //Second input props//
          secondInputName="job"
          secondInputType="text"
          secondInputPlaceHolder="Description"
          secondInputMinLength="2"
          secondInputMaxLength="200"
          saveButtonText="Save"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <div className="popup" id="addImagePopup">
          <div className="popup__wrapper">
            <button
              className="popup__close-button popup__close-button_form"
              type="button"
              id="add-popup__close-button popup__close-button_form"
            ></button>
            <form
              className="popup__form form"
              id="addImagePopup__form"
              name="register"
              noValidate
            >
              <h2 className="popup__title">New place</h2>
              <label className="popup__field">
                <input
                  className="popup__input popup__input_addPhoto_caption"
                  type="text"
                  name="caption"
                  id="caption-input"
                  placeholder="Title"
                  minLength="1"
                  maxLength="30"
                  required
                />
                <span className="popup__input-error caption-input-error"></span>
              </label>
              <label className="popup__field">
                <input
                  className="popup__input popup__input_addPhoto_ImageURL"
                  type="url"
                  name="image"
                  placeholder="Image Link"
                  id="url-input"
                  required
                />
                <span className="popup__input-error url-input-error"></span>
              </label>
              <button
                id="newImage"
                className="popup__submit-button"
                type="submit"
                name="Create"
              >
                Create
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_image">
          <div className="popup__wrapper">
            <button className="popup__close-button popup__close-button_image"></button>
            <img className="popup__image" src=" " alt="placeHolder" />
            <p className="popup__caption"></p>
          </div>
        </div>
        <Header />
        <Main
          onEditProfileClick={openEditProfile}
          onEditAvatarClick={openEditAvatar}
        />
        <Footer />
        <template id="card-template">
          <div className="card">
            <img className="card__image" src="placeHolder" alt="placeHolder" />
            <button className="card__removeButton"></button>
            <div className="card__social-brand">
              <h2 className="card__caption"></h2>
              <div className="card__like">
                <button className="card__like-button" type="button"></button>
                <p className="card__like-counter"></p>
              </div>
            </div>
          </div>
        </template>
      </body>
    </>
  );
}

export default App;
