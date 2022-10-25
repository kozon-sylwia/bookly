import { StyledCartContent } from "../header/Header.styled";
import { CartContext } from "../../providers/CartProvider";
import { useContext, useState, useEffect } from "react";
import { getCover } from "../../utils/getCover";

export const CartContent = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <StyledCartContent>
      <h2>Your cart</h2>
      <p>Cart value: {total}</p>
      <div>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.cover} width="100px" />
            {item.title}
          </li>
        ))}
      </div>
      <button>Go to order summary</button>
      <button>Show cart</button>
    </StyledCartContent>
  );
};
