import { useId } from "react";
import css from './SearchBox.module.css';

const SearchBox = ({ inputValue, handleChange }) => {
  
  const SearchBoxId = useId();

  const handleInputChange = (evt) => {
    handleChange(evt.target.value.toLowerCase());
  };

  return (
    <div className={css.SearchBox}>
      <label htmlFor={SearchBoxId} className={css.SearchBoxLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="searchBar"
        className={css.SearchBoxInput}
        id={SearchBoxId}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;