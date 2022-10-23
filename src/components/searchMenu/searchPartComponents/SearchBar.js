import { useContext } from "react";

import { StyledSearchBar } from "./searchPartComponents.styled";
import { TextInput } from "./TextInput";
import { deboubceQuery } from "./utils/debouceQuery";

import magnifying from "../../../img/icons/magnifying.png";

export const SearchBar = ({ context }) => {
  const { setSearchConditions } = useContext(context);
  const performQuery = deboubceQuery((searchTerm) => {
    setSearchConditions((prevState) => ({
      ...prevState,
      searchText: searchTerm,
    }));
  }, 500);
  return (
    <StyledSearchBar>
      <TextInput
        name="searchText"
        labelText="SEARCH: "
        callback={performQuery}
      />
      <img src={magnifying} height="20px" alt="magnifying" />
    </StyledSearchBar>
  );
};
