import React from 'react';
import groupImage from '../assets/Group7483.png'; 
import "./Poster.css";

function Poster (){
    return(
        <div className='poster'>
             <div className='poster-image'>
             <img  src={groupImage} alt='poster'/>
             </div>
        </div>
    )
}

export default Poster;