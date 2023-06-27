import React from 'react';

function Filter({ searchTerm, onSearchChange }) {
  const handleSearchChange = event => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default Filter;
