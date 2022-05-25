import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";

const Prodotto = ({ datiProdotto }) => {
  const dispatch = useDispatch(); 
  return (
    <>
      <div className="cart__item" key={datiProdotto.id}>
        <div className="name">{datiProdotto.name}</div>
        <div className="price">{datiProdotto.price}</div>
        <button onClick={() => dispatch(addToCart(datiProdotto))}>
          add to cart
        </button>
      </div>
    </>
  );
};

export default Prodotto;
