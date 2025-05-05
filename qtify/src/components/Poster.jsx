import React from 'react';
import groupImage from '../assets/Group7483.png'; 
import "./Poster.css";

function Poster (){
    return(
        <div className='poster'>
             <div>
                <h1>100 Thousand songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
             </div>
             <div>
                <img
                    src={groupImage}
                    width={212}
                    alt='headphones'
                />
             </div>
        </div>
    )
}

export default Poster;