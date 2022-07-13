import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }
  function openEditProfile() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function openAddPlacePopup() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
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
          name="editProfileText"
          title="Edit profile"
          submitText="Save"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              className="popup__input"
              name="name"
              type="text"
              placeholder="Full Name"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input"
              name="job"
              type="text"
              placeholder="Description"
              minLength={2}
              maxLength={200}
              required
            />
            <span className="popup__input-error job-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="addImage"
          title="New place"
          submitText="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__field">
            <input
              className="popup__input"
              type="text"
              name="caption"
              placeholder="Title"
              minLength="1"
              maxLength="30"
              required
            />
            <span className="popup__input-error caption-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input"
              type="url"
              name="image"
              placeholder="Image Link"
              required
            />
            <span className="popup__input-error url-input-error"></span>
          </label>
        </PopupWithForm>

        <div className="popup popup_image">
          <div className="popup__wrapper">
            <button className="popup__close-button popup__close-button_image"></button>
            <img className="popup__image" src=" " alt="placeHolder" />
            <p className="popup__caption"></p>
          </div>
        </div>
        <Header />
        <Main
          onAddPlaceClick={openAddPlacePopup}
          onEditProfileClick={openEditProfile}
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
