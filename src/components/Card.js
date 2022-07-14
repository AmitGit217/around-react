import React from "react";

export default function Card({
  card,
  link,
  caption,
  likeCounter,
  onCardClick,
  onDeleteClick,
}) {
  function handleClick() {
    onCardClick(card);
  }
  function handleRemoveModal() {
    onDeleteClick(card);
  }
  return (
    <div className="card">
      <img
        className="card__image"
        src={link}
        alt="placeHolder"
        onClick={handleClick}
      />
      <button className="card__removeButton" onClick={handleRemoveModal} />
      <div className="card__social-brand">
        <h2 className="card__caption">{caption}</h2>
        <div className="card__like">
          <button className="card__like-button" type="button" />
          <p className="card__like-counter">{likeCounter}</p>
        </div>
      </div>
    </div>
  );
}
