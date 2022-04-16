import React from 'react'
import { useGlobalContext } from '../../context'
import './cart.style.css'
import deleteButton from '../../assets/images/icon-delete.svg'
export const Cart = () => {
    const { data, amount, clearCart } = useGlobalContext()
    if (amount === 0) {
        return <div className='cart'>
            <p className='cart-title'>Cart</p>
            <p className='empty-cart'>Your cart is empty</p>
        </div>
    }
    return (
        <div className='cart'>
            <p className='cart-title'>Cart</p>


            {data.map(items => {
                const { id, thumbnail, name, price } = items


                return (
                    <div key={id} className='cart-content' >
                        <img src={thumbnail[0]} alt={name} />
                        <div className="name-price">
                            <p>{name}</p>
                            <p>$ {price} x {amount}
                                <span>$ {price * amount}</span>
                            </p>
                        </div>
                        <img onClick={clearCart} className="delete-from-cart" src={deleteButton} alt="delete-from-cart" />
                    </div>
                )
            })}
            <button className="button-add-cart"  >Checkout</button>
        </div>
    )
}
