import React from 'react';
import { useState } from 'react';
import '../styles/collapse.css'
import vector from '../assets/Vector.svg'
import { logementsList } from '../data.js';



const CollapseLogement = () => {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ?(
        <div>
            {logementsList.map((logement) => (
                <p key={logement.id}>
        <div className='collapse equipements' onClick={() => setIsOpen(false)}>
            <p className='collapse-text'>Description</p>
            <img src={vector} alt="flêche dirigée vers le haut" className='collapse-arrow' />
        </div>
        <div className='collapse-description equipements'>
<p>
    {logement.description}
</p>
        </div>
        </p>
            ))}
        </div>
    ) : (
        <div>
            {logementsList.map((logement) => (
                <p key={logement.id}>
        <div className='collapse equipements' onClick={() => setIsOpen(true)}>
            <p className='collapse-text'>Description</p>
            <img src={vector} alt="flêche dirigée vers le bas" />
        </div>
        </p>
        ))}
        </div>
    )
};

export default CollapseLogement;