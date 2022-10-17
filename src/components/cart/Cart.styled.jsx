import styled from "styled-components";
import { Link } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
</style>;

export const StyledCart = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100%;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 50px;
  position: relative;
  height: auto;
  height: 100%;
  margin-bottom: 250px;
`;
export const StyledTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 45px;
  color: black;
  text-align: center;
  margin-top: 0;
  padding-top: 50px;
`;
export const StyledCartItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr 1fr 1fr;
  list-style-type: none;
  border-radius: 5px;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  margin: auto;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
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
  width: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  grid-column: 6/7;
`;
export const StyledDeliveryButton = styled.button`
  background-color: #ba120f;
  color: white;
  border: none;
  border-radius: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin: 3px;
  height: 30px;
  width: 170px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  grid-column: 2/3;
`;
export const StyledCounterButton = styled.button`
  background: #f2f2f2;
  color: black;
  border: none;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-bottom: 16px;
`;
export const StyledInput = styled.input`
  background: #f2f2f2;
  border: 1px solid #220901;
  margin: 3px;
  cursor: pointer;
`;

export const StyledCounterIput = styled.input`
  background-color: transparent;
  border: none;
  width: 40px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
`;

export const StyledCartContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  width: 90vw;
  margin: auto;
`;
export const StyledSummary = styled.div`
  display: grid;
  grid-template-columns: 14fr 2fr;
  font-weight: 200px;
  align-items: center;
  border: none;
  border-radius: 5px;
  margin-right: 100px;
  padding: 15px;
  background-color: #f2f2f2;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  margin: auto;
`;

export const StyledTotal = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-left: 50px;
  font-size: 20px;
  grid-column: 1/2;
`;

export const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  row-gap: 25px;
  margin-bottom: 25px;
`;

export const StyledEmptyCartDiv = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  background-color: #f2f2f2;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 15px;
  width: 30%;
  margin-left: 40px;
  padding: 40px;
  height: 15%;
  margin: auto;
  text-align: center;
  font-size: 25px;
`;

export const StyledBookCover = styled.img`
  width: 50px;
  grid-column: 1/2;
  place-self: center;
`;
export const StyledBookInfo = styled.div`
  grid-column: 2/3;
`;
export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 5/6;
`;

export const StyledBookTitle = styled.div`
  font-size: 19px;
`;
export const StyledBookAuthor = styled.div`
  font-weight: normal;
  font-size: 15px;
`;
export const StyledPrices = styled.div`
  font-size: 19px;
  font-weight: normal;
  grid-column: 3/4;
`;

export const StyledPricesSum = styled.div`
  font-size: 19px;
  font-weight: normal;
  grid-column: 4/5;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const StyledFormWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 700;

  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 0;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const StyledDeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  width: 80vw;
  margin: auto;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`;

export const StyledOrderTotal = styled.div`
  margin-left: 10%;
  padding: 10px;
  background-color: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #220901;
  height: 20%;
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-right: 20%;
`;

export const StyledTotalCost = styled.h3`
  background-color: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 50%;
  padding: 5px;
`;

export const StyledDeliveryHeader = styled.h2`
  font-size: 30px;
`;
export const StyledDeliveryInfo = styled.p`
  font-size: 20px;
  font-weight: normal;
`;
export const StyledSubmitButton = styled.button`
  background-color: #ba120f;
  border: 1px solid #220901;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  color: white;
  margin: 3px;
  height: 30px;
  width: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-top: 30px;
`;

export const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  row-gap: 10px;
  width: 50%;
`;

export const StyledSummaryWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 0;
  padding-top: 50px;
  padding-bottom: 20%;
`;
export const StyledSummaryHeader = styled.h1`
  font-size: 40px;
`;
export const StyledSummaryInfo = styled.p`
  font-size: 20px;
  /* font-weight: normal; */
`;

export const StyledOrangeLink = styled(Link)`
  font-size: 20px;
  color: #ba120f;
  font-weight: 600;
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.2);
`;
