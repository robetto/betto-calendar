import React from 'react'
import { useSelector } from 'react-redux'

const CartBar = () => {

    const statoCarrello = useSelector( (state) => state.cart)

  return (
    <div>
        oggetti nel carrello: 
        {statoCarrello.totalQuantity} - 
        prezzo : 
        {statoCarrello.totalPrice}
    </div>
  )
}

export default CartBar