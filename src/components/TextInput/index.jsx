import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return <input placeholder="Search post" className="text-input" onChange={handleChange} value={searchValue} type="search" />;
};
