import React from 'react'
import { ShowImage } from '../showImage/ShowImage'
import './modal.style.css'
import { useGlobalContext } from '../../context'
export const Modal = () => {

    const { openModal, modalClosing, prev, next } = useGlobalContext()


    return (
        <div className={`modal ${openModal ? 'modal-display' : ''} `}>
            <div className="modal-content">
                <svg
                    onClick={modalClosing} className='modal-close'
                    width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
                <ShowImage />
                <div className="arrow-both">
                    <svg onClick={prev} className='arrow' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#111" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                    <svg onClick={next} className='arrow' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#111" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                </div>
            </div>
        </div>
    )
}
