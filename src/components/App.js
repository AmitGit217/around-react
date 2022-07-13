import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }
  function openEditProfile() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function openAddPlacePopup() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function openEditAvatarPicture() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <>
      <PopupWithForm
        name="editAvatar"
        title="Change profile picture"
        submitText="Save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input
            className="popup__input"
            type="url"
            name="url-input"
            placeholder="Image Link"
            required
          />
          <span className="popup__input-error url-input-error"></span>
        </label>
      </PopupWithForm>

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
        onEditAvatarClick={openEditAvatarPicture}
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
    </>
  );
}

export default App;
