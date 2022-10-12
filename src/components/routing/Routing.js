import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { Contact } from "./../pages/contact/Contact";
import { BookstorePage } from "./../pages/bookstore/BookstorePage";
import { Register } from "./../auth/Register";
import { Login } from "./../auth/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthContext } from "./../../providers/AuthProvider";
import { OrdersPage } from "./../pages/admin/OrdersPage";
import { MessagesPage } from "../pages/user/messages/MessagesPage";
import { UserOrdersPage } from "../pages/user/ordersPage/UserOrdersPage";
import { Warehouse } from "../pages/admin/warehouse/WarehousePage";
import { Home } from "../pages/home/Home";
import { ShoppingCart } from "../cart/ShoppingCart";
import { OrderSummary } from "../cart/OrderSummary";
import { CartSummaryForm } from "../cart/CartSummaryForm";
import { ForgotPassword } from "../auth/ForgotPassword";
import { AccountPage } from "../pages/account/AccountPage";
import { NewBook } from "../pages/newBook/NewBook";

export const Routing = () => {
  const { isAuth, isAdmin, isUser } = useContext(AuthContext);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookstorePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoute isAllowed={!isAuth} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/orderHistory" element={<UserOrdersPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/summary" element={<OrderSummary />} />
          <Route path="/delivery" element={<CartSummaryForm />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={isAdmin} />}>
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/addNewBook" element={<NewBook />} />
        </Route>
      </Routes>
    </main>
  );
};
