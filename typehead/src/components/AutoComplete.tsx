import type { ChangeEvent } from "react";
import type { AutocompleteProps } from "../types";


const AutoComplete = ({
  searchInput,
  setSearchInput,
  setShowResult,
}: AutocompleteProps) => {
  return (
    <div className="autocomplete_container">
      Autocomplete
      <>
        <input
          className="autocomplete_inputBox"
          type="text"
          name="search"
          value={searchInput}
          onFocus={() => {
            setShowResult(true);
          }}
          onBlur={() => {
            setShowResult(false);
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e?.target?.value);
          }}
        />
      </>
    </div>
  );
};

export default AutoComplete;
