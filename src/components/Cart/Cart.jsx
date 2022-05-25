import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { fakeItems } from "../Catalog/fakeItems";

const Cart = () => {
  const dispatch = useDispatch();

  const carrello = useSelector((state) => state.cart.itemsList)
  console.log(carrello);

  return (
    <div className="cart">
      <div className="cart__list">
        {carrello.map((fakeItem) => {
          return (
            <div className="cart__item" key={fakeItem.id}>
              <div className="name">{fakeItem.name}</div>
              <div className="price">{fakeItem.price}</div>
              <button onClick={() => dispatch(addToCart(fakeItem))}>add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
