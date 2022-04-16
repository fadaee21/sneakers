import React, { useState } from 'react'
import cart from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import logo from '../../assets/images/logo.svg'
import { useGlobalContext } from '../../context'
import { Cart } from '../cart/Cart'
import burgerMenu from '../../assets/images/icon-menu.svg'
import './header.style.css'
export const Header = () => {
    const { amount  ,slideOn, setSlideOn } = useGlobalContext()
    const [showCart, setShowCart] = useState(false)

    const handleClick = () => {
        setShowCart(!showCart)
    }
    return (
        <div className="header">
            <div className="header-content">
                <div className='header-logo'>
                    <img
                        onClick={() => setSlideOn(true)}
                        className='burgerMenu' src={burgerMenu} alt="burger menu" />
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`header-list ${slideOn ? "slide-on" : ""}`}>
                    <span
                        onClick={() => setSlideOn(false)}
                        className='close-sidebar' ></span>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='header-img' >
                    <div className='cart-icon'>
                        <img onClick={handleClick} src={cart} alt="cart" />
                        {amount !== 0 && <span>{amount}</span>}
                        {showCart && <Cart />}
                    </div>

                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </div >
    )
}
