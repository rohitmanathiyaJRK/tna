import React from "react";
import cardimg from '../../images/cardimg.svg'
import './Card.css'

const Card=({})=>{

    return(
        <>
        <div className="card">
            <div className="card-div-1">
                <img src={cardimg} alt="" />
            </div>
            <div className="card-div-2">
                <p>NEET Repeater’s 1 year long term intensive class room courses</p>

            </div>
            <div className="card-div-3">
                <button>Apply Now</button>
            </div>
            
        </div>
        </>
        
    )

}
export default Card;