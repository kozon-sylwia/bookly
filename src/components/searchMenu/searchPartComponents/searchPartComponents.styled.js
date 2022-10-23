import styled from "styled-components";

export const StyledCategoryBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const StyledCategoryRadioButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: fixed;
  & + label {
    padding: 10px;
    font-size: 15px;
    text-transform: uppercase;
    background-color: #f2f2f2;
    border: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    font-weight: 400;
    border-radius: 50px;
    :hover {
      scale: 1.1;
    }
  }
  &:checked + label {
    background-color: #ba120f;
    color: white;
  }
`;

export const StyledSearchContainer = styled.div`
  padding: 5px 20px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  text-transform: uppercase;
  p,
  label {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
  input,
  select {
    font-size: 18px;
    background-color: transparent;
    border: none;
    text-transform: uppercase;
  }
  input[pattern] {
    max-width: 40px;
    text-align: center;
  }
`;

export const StyledSearchBar = styled(StyledSearchContainer)`
  flex-grow: 1;
  label {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }
  label input {
    flex-grow: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px 20px 20px;
  gap: 30px;
`;
