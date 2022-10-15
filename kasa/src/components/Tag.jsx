import React from 'react';
import "../styles/tag.css"
import { logementsList } from '../data.js';

const Tag = () => {
    return (
        <div className='tags'>
            {logementsList.map((logement) => (
        <div key={logement.tags} className='tag'>
            {logement.tags}
        </div>
            ))}
        </div>
    );
};

export default Tag;