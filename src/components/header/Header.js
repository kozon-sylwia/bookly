import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { StyledHeader } from "./Header.styled";
import { AuthPanel } from "./AuthPanel";
import { AccountMenu } from "./AccountMenu";
import { Navigation } from "./Navigation";
import logo from "../../img/logo.jpg";
import shoppingCart from "../../img/icons/shopping-cart.jpg";
import {
  StyledNavLink,
  StyledCartLink,
  StyledCartCounter,
} from "./Header.styled";
import { CartContext } from "../../providers/CartProvider";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isAuth, user } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <StyledHeader>
      <Link to="/" className="logoContainer">
        <img src={logo} alt={"logo"} />
      </Link>
      <Navigation />
      {isAuth ? <AccountMenu /> : <AuthPanel />}
      {isAuth && (
        <StyledCartLink to="/cart">
          <span>
            <img
              src={shoppingCart}
              alt="shopping cart"
              className="shoppingCartIcon"
              height={"20px"}
            />
          </span>
          <StyledCartCounter>
            {cart === undefined ? 0 : cart.length}
          </StyledCartCounter>
        </StyledCartLink>
      )}
    </StyledHeader>
  );
};
