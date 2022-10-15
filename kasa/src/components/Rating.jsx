import React from 'react';
import "../styles/rating.css"
import redstar from "../assets/star_rate-24-red.svg";
import greystar from "../assets/star_rate-24-grey.svg";

const Rating = () => {
    return (
        <div>
          <img src={redstar} alt="étoile de notation rouge" className='rating'/>
          <img src={redstar} alt="étoile de notation rouge" className='rating'/>
          <img src={redstar} alt="étoile de notation rouge" className='rating'/>
          <img src={greystar} alt="étoile de notation grise" className='rating'/>
          <img src={greystar} alt="étoile de notation grise" className='rating'/>
        </div>
    );
};

export default Rating;