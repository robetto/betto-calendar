import React from "react";
import CartBar from "../Cart/CartBar";
import { fakeItems } from "./fakeItems";
import Prodotto from "./Prodotto";

const Catalog = () => {
  return (
    <>
      <CartBar />
      <div className="lista_prodotti">
        {fakeItems.map((fakeItem) => {
          return <Prodotto datiProdotto={fakeItem} />;
        })}
      </div>
    </>
  );
};

export default Catalog;
