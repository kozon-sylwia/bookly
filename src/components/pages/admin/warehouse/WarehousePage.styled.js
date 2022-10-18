import styled from "styled-components";

export const StyledWarehouseList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  row-gap: 15px;
  margin-bottom: 50px;
`;

export const StyledBookItem = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 100px 1fr 130px 130px 320px;
  padding: 15px;
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 15px;
  margin: auto;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;
export const StyledBookItemHeader = styled.li`
  display: grid;
  grid-template-columns: 100px 1fr 100px 130px 350px;
  padding: 15px;
  align-items: center;
  background-color: #f2f2f2;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-top: 25px;
  h2 {
    font-weight: 500;
    margin: 0;
    :first-child {
      justify-self: center;
    }
  }
  :first-child {
    justify-self: center;
  }
  font-size: 16px;
`;
export const StyledBookTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
`;
export const StyledBookAuthor = styled.div`
  font-weight: normal;
  font-size: 19px;
`;
export const StyledPrices = styled.div`
  font-size: 19px;
  font-weight: normal;
`;
export const StyledButton = styled.button`
  background-color: #ba120f;
  border: none;
  border-radius: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  color: white;
  margin: 3px;
  height: 30px;
  width: 130px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
export const StyledBookCover = styled.img`
  width: 50px;
  justify-self: center;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  align-items: center;
`;

export const StyledInput = styled.input`
  background: rgba(255, 242, 224, 0.9);
  border: 1px solid #220901;
  margin: 3px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 70px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
`;
