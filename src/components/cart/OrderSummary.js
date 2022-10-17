import {
  StyledOrderSummary,
  StyledSummaryHeader,
  StyledSummaryInfo,
  StyledSummaryWrapper,
  StyledOrangeLink,
} from "./Cart.styled";
import delivery from "./img/delivery.jpg";

export const OrderSummary = () => {
  return (
    <StyledSummaryWrapper>
      <StyledOrderSummary>
        <StyledSummaryHeader>
          Thank you for your <span style={{ color: "#ba120f" }}>order</span>!
        </StyledSummaryHeader>
        <StyledSummaryInfo>
          Your order will be send within two working days. You can follow stages
          of your order on your account page.{" "}
        </StyledSummaryInfo>
        <StyledOrangeLink to="/account">Your account</StyledOrangeLink>
        <StyledSummaryInfo>
          We hope you will see our store again soon!
        </StyledSummaryInfo>
        <StyledOrangeLink to="/books"> Book store</StyledOrangeLink>
      </StyledOrderSummary>
      <img src={delivery} width="400px" />
    </StyledSummaryWrapper>
  );
};
