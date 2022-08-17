import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(search);
    setSearch("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
