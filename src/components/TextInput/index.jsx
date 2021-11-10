import P from 'prop-types';
import React from 'react';
import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return <input placeholder="type your search" className="text-input" onChange={handleChange} value={searchValue} type="search" />;
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired
}
