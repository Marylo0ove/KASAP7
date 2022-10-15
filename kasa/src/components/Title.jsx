import React from 'react';
import "../styles/title.css"
import { logementsList } from '../data.js';

const Title = () => {
    return (
        <div className='title'>
            {logementsList.map((logement) => (
            <div key={logement}>
                 <h1 className='title'>{logement.title}</h1>
                 <p className='location'>{logement.location}</p>
            </div>
             ))}
        </div>
    );
};

export default Title;