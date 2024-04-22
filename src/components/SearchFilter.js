
// components/SearchFilter.js
import React, { useState } from 'react';
import '../components/SearchFilter.css';

function SearchFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [addressFilter, setAddressFilter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'searchTerm') {
      setSearchTerm(value);
    } else if (name === 'addressFilter') {
      setAddressFilter(value);
    }

    const filterValue = `${value} ${addressFilter}`;
    onSearch(filterValue.trim());
  };

  return (
    <div className="search-filter">
      <div className="search-filter-row">
        <label htmlFor="searchTerm" className="search-label">
          Name
        </label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search profiles by name..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
      </div>
      <div className="search-filter-row">
        <label htmlFor="addressFilter" className="search-label">
          Address
        </label>
        <input
          type="text"
          name="addressFilter"
          id="addressFilter"
          placeholder="Search profiles by address..."
          value={addressFilter}
          onChange={handleChange}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default SearchFilter;