import React from "react";
import ListingCard from "./ListingCard";
import Form from "./Form";

function ListingsContainer({ listings, onDeleteListing, onSortListings, sortIsOn, onAddItem }) {
  return (
    <main>
      <label htmlFor="sort">Sort by Location </label>
      <input
        id="sort"
        name="sort"
        value={sortIsOn}
        type="checkbox"
        onChange={(event) => onSortListings(event.target.checked)}
      />
      <Form onAddItem={onAddItem} />
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
