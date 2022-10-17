import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../api/firebase";
import { increment, doc, updateDoc } from "firebase/firestore";
import { findCart, deleteCart } from "../../utils/cartdbHandlers";
import { createOrder } from "../../utils/ordersHandlers";
import { CartContext } from "../../providers/CartProvider";
import { AuthContext } from "../../providers/AuthProvider";
import {
  StyledInput,
  StyledForm,
  StyledFormWrapper,
  StyledDeliveryContainer,
  StyledOrderTotal,
  StyledTotalCost,
  StyledDeliveryHeader,
  StyledDeliveryInfo,
  StyledDeliveryButton,
} from "./Cart.styled";

export const CartSummaryForm = () => {
  const { cart, setCart, cartId, setCartId, total } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const defaultFormState = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    payment: "",
    delivery: "",
  };
  const [orderData, setorderData] = useState(defaultFormState);

  const changeBookQuantity = (bookID, count) => {
    const userDocRef = doc(db, "books", bookID);
    const updateBookQuantity = {
      quantity: increment(-count),
    };
    updateDoc(userDocRef, updateBookQuantity);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    createOrder(cart, orderData, totalCost, user);
    cart.forEach((book) => changeBookQuantity(book.id, book.count));
    deleteCart(cartId);
    findCart(user, setCart, setCartId);
    navigate("/summary");
  };

  const updateOrderFormState = (e) => {
    setorderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const delivery = 15;
  const totalCost = (Number(total) + delivery).toFixed(2);
  const navigate = useNavigate();
  return (
    <StyledFormWrapper>
      <StyledDeliveryContainer>
        <StyledOrderTotal>
          <StyledDeliveryHeader>Order summary</StyledDeliveryHeader>
          <StyledDeliveryInfo>Value of items: {total} zł</StyledDeliveryInfo>
          <StyledDeliveryInfo>Delivery: 15 zł</StyledDeliveryInfo>
          <StyledTotalCost>Total cost: {totalCost} zł</StyledTotalCost>
        </StyledOrderTotal>
        <StyledForm onSubmit={(e) => handleOrderSubmit(e)}>
          <StyledDeliveryHeader>Delivery information</StyledDeliveryHeader>
          <StyledInput
            type="text"
            name="name"
            id="name"
            value={orderData.name}
            onChange={updateOrderFormState}
            required={true}
            placeholder="Name"
          />
          <StyledInput
            type="text"
            name="surname"
            id="surname"
            value={orderData.surname}
            onChange={updateOrderFormState}
            required={true}
            placeholder="Surname"
          />
          <StyledInput
            type="email"
            name="email"
            id="email"
            value={orderData.email}
            onChange={updateOrderFormState}
            required={true}
            placeholder=" Email"
          />
          <StyledInput
            type="tel"
            name="phone"
            id="phone"
            value={orderData.phone}
            onChange={updateOrderFormState}
            required={true}
            placeholder=" Phone"
          />
          <p>Address:</p>
          <StyledInput
            type="text"
            name="city"
            id="city"
            value={orderData.city}
            onChange={updateOrderFormState}
            required={true}
            placeholder="City"
          />
          <StyledInput
            type="text"
            name="street"
            id="street"
            value={orderData.street}
            onChange={updateOrderFormState}
            required={true}
            placeholder="Street"
          />
          <div>
            <p htmlFor="payment">Choose method of payment: </p>
            <label htmlFor="payment">
              Blik
              <input
                type="radio"
                name="payment"
                id="payment"
                onChange={updateOrderFormState}
                value="Blik"
                required={true}
                placeholder=""
              />
            </label>
            <label htmlFor="payment">
              Card
              <input
                type="radio"
                name="payment"
                value="Card"
                id="payment"
                onChange={updateOrderFormState}
                required={true}
                placeholder=""
              />
            </label>
          </div>
          <div htmlFor="delivery">
            <p>Choose method of delivery:</p>
            <label htmlFor="delivery">
              InPost
              <input
                type="radio"
                name="delivery"
                value="InPost"
                id="delivery"
                onChange={updateOrderFormState}
                required={true}
                placeholder=""
              />
            </label>
            <label htmlFor="delivery">
              DHL
              <input
                type="radio"
                name="delivery"
                value="DHL"
                id="delivery"
                onChange={updateOrderFormState}
                required={true}
                placeholder=""
              />
            </label>
          </div>
          <StyledDeliveryButton type="submit">
            Submit order
          </StyledDeliveryButton>
        </StyledForm>
      </StyledDeliveryContainer>
    </StyledFormWrapper>
  );
};
