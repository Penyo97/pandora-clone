import React from 'react'
import './Slide.css'
function Slide({image,price}) {
    return (
        <div className="box">
            <div className="box__content">
                <img src={image} className="box__img" alt="charm"/>
                <p className="box__price">{price}</p>
            </div>
        </div>
    )
}

export default Slide
