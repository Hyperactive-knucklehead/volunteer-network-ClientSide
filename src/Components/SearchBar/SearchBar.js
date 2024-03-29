import React from "react";
import {
  MainSearchInput,
  MainSearchInputItem,
  SearchButton,
  SearchInput,
  SearchInputWrapper,
} from "../StyledComponents/SeachInput";

const SearchBar = ({ handleSearch }) => {
  return (
    <SearchInputWrapper>
      <MainSearchInput>
        <MainSearchInputItem>
          <SearchInput
            onChange={(e) => handleSearch(e)}
            className="mb-2"
            type="text"
            placeholder="Search..."
            required
          />
        </MainSearchInputItem>
        <SearchButton className="d-none d-md-block">Search</SearchButton>
      </MainSearchInput>
    </SearchInputWrapper>
  );
};

export default SearchBar;
