import React from "react";
export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="card" onClick={handleClick}>
      <img className="card__image" src={props.link} alt="placeHolder" />
      <button className="card__removeButton"></button>
      <div className="card__social-brand">
        <h2 className="card__caption">{props.caption}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-counter">{props.likeCounter}</p>
        </div>
      </div>
    </div>
  );
}
