import React from 'react'
import { useGlobalContext } from '../../context'
import './showImage.style.css'

export const ShowImage = () => {

    const { data, modalOpening, imageNum, setImageNum, prev, next, slideOn } = useGlobalContext()




    return (
        <div className={`show-image ${slideOn ? "show-image-darkSlide" : ""}`}>
            {data.map(item => {

                const { bigImage, thumbnail, id, name } = item

                return (
                    < div key={id}>
                        <div className="big-image">

                            <img onClick={modalOpening} src={bigImage[imageNum]} alt={name} />
                            <div className="arrow-both-page">
                                <svg onClick={prev} className='arrow' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#111" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                                <svg onClick={next} className='arrow' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#111" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                            </div>
                        </div>
                        <div className="thumbnail-images">
                            <img
                                onClick={() => setImageNum(0)}
                                className={imageNum === 0 ? "active-thumb" : ""}
                                src={thumbnail[0]}
                                alt={name}
                            />
                            <img
                                onClick={() => setImageNum(1)}
                                className={imageNum === 1 ? "active-thumb" : ""}
                                src={thumbnail[1]}
                                alt={name}
                            />
                            <img
                                onClick={() => setImageNum(2)}
                                className={imageNum === 2 ? "active-thumb" : ""}
                                src={thumbnail[2]}
                                alt={name}
                            />
                            <img
                                onClick={() => setImageNum(3)}
                                className={imageNum === 3 ? "active-thumb" : ""}
                                src={thumbnail[3]}
                                alt={name}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
