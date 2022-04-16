import React from 'react'
import './addCart.style.css'
import { useGlobalContext } from '../../context'


export const AddCart = () => {


  const { increase, decrease, clearCart, amount, handleError, data } = useGlobalContext()


  return (
    <div className='add-cart' >
      <div className='cart-final-price'>
        <p>$ {data[0].price}
        <span className='badge-percent' >50%</span></p>
        <p className='cart-off-price' >$250.00</p>
      </div>
      <div className="all-buttons">
        <div className="cart-buttons">
          <span className='cart-minus' onClick={decrease} ></span>
          <span className='cart-count'>{amount}</span>
          <span className='cart-plus' onClick={increase} ></span>
        </div>
        <button onClick={amount === 0 ? increase : clearCart} className="button-add-cart"  >
          {amount === 0 ? "Add to cart" : "clear cart"}
        </button>
      </div>
      <p className={`errCount ${handleError ? 'displayErrorOn' : ''}`}>you can not buy more than 5 sneakers</p>
    </div>
  )
}
