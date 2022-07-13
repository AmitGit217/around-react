export default function ImagePopup(props) {
  const link = `${props.card.link}`; //Convert to string
  return (
    <div
      className={`popup popup_image ${
        props.card.link.length > 10 ? "popup_show" : ""
      }`}
    >
      <div className="popup__wrapper">
        <button
          className="popup__close-button popup__close-button_image"
          onClick={props.onClose}
        ></button>
        <img className="popup__image" src={link} alt={props.card.caption} />
        <p className="popup__caption">{props.card.caption}</p>
      </div>
    </div>
  );
}
