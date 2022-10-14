import React from 'react';
import '../styles/card.css';
import { logementsList } from '../data.js';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <ul className='list'>
        {logementsList.map((logement) => (
            <li key={logement.id}>
                <Link to="/FicheLogement">
                <div className='card'>
                    <div>
                <img  src={logement.cover} alt={`${logement.tags}`} className='card-image' />
                </div>
                <div>
                <h2 className='card-title'>{logement.title}</h2>
                </div>
                </div>
                </Link>
            </li>
            
        ))}
        </ul>
        /*<div className='card'>
            <h2 className='card-title'>Titre de la location</h2>
        </div>*/
    );
};

export default Card;