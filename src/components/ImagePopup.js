export default function ImagePopup(props) {
  return (
    <div
      className={`popup popup_image ${
        props.card.length > 10 ? "popup_show" : ""
      }`}
    >
      <div className="popup__wrapper">
        <button
          className="popup__close-button popup__close-button_image"
          onClick={props.onClose}
        ></button>
        <img className="popup__image" src={props.card} alt="placeHolder" />
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}
