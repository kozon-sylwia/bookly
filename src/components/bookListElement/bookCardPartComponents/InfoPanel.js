import {
  StyledInfoPanel,
  StyledBookTitle,
} from "./BookCardPartComponents.styled";

export const InfoPanel = ({ title, author, price }) => {
  return (
    <StyledInfoPanel>
      <StyledBookTitle>{title}</StyledBookTitle>
      <p>by {author}</p>
      <p className="price">{price} zł</p>
    </StyledInfoPanel>
  );
};
