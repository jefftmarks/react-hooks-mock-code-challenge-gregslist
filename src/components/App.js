import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortIsOn, setSortIsOn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(e => console.error(e));
  }, []);

  function handleDeleteListing(deletedListing) {
    setListings(listings.filter(listing => {
      return listing.id !== deletedListing.id
    }))
  }

  function handleAddItem(newItem) {
    setListings([...listings, newItem]);
  }

  function handleFilter(listing) {
    if (filter === "All") {
      return true;
    } else {
      return listing.description.toLowerCase().includes(filter.toLowerCase());
    }
  }

  function handleSort(a, b) {
    const x = a.location.toLowerCase();
    const y = b.location.toLowerCase();
    return x.localeCompare(y);
  }

  const filteredListings = sortIsOn ? listings.filter(handleFilter).sort(handleSort) : listings.filter(handleFilter);

  return (
    <div className="app">
      <Header onSearch={setFilter} />
      <ListingsContainer
        listings={filteredListings}
        onDeleteListing={handleDeleteListing}
        onSortListings={setSortIsOn}
        sortIsOn={sortIsOn}
        onAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;
