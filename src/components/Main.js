import "../blocks/main.css";
import profileImage from "../images/profile-Image.jpg";
export default function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__avatar-image"
          src={profileImage}
          alt="profile-image"
        />
        <button className="profile__overlay"></button>
        <div className="profile__info">
          <div className="profile__top-info">
            <h1 className="profile__name">Amit</h1>
            <button
              onClick={props.onEditProfileClick}
              className="profile__edit-button"
              type="button"
              id="profilePopup__edit-button"
            ></button>
          </div>
          <p className="profile__description">Full-Stack Developer</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}
