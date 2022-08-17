import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { description, image, location, id } = listing;


  function onClickDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteListing(listing))
      .catch(e => console.error(e));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={() => setIsFavorite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorite(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onClickDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
