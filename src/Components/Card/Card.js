import React from "react";
import cardimg from '../../images/cardimg.svg'
import './Card.css'

const Card=({text,img,linkURL})=>{
    console.log("text is ",text);


    return(
        <>
        <div className="card">
            <div className="card-div-1">
                <img src={img} alt="" />
            </div>
            <div className="card-div-2">
                <p>{text}</p>

            </div>
            <div className="card-div-3">
                <button> <a href={linkURL} className='universal_btn' target="_blank">Apply Now</a></button>
            </div>
            
        </div>
        </>
        
    )

}
export default Card;