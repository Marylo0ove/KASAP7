import React from 'react';
import { useState } from 'react';
import '../styles/collapse.css'
import vector from '../assets/Vector.svg'
import { textsList } from '../texts';



const Collapse = () => {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ?(
        <div>
            {textsList.map((propos, i) => (
                <p key={propos.id}>
        <div className='collapse' onClick={() => setIsOpen(false)}>
            <h2 className='collapse-text'>{propos.title} Ouvert</h2>
            <img src={vector} alt="flêche dirigée vers le haut" className='collapse-arrow' />
        </div>
        <div className='collapse-description'>
<p>
    {propos.description}
</p>
        </div>
        </p>
            ))}
        </div>
    ) : (
        <div>
            {textsList.map((propos) => (
                <p key={propos.id}>
        <div className='collapse' onClick={() => setIsOpen(true)}>
            <h2 className='collapse-text'>{propos.title}</h2>
            <img src={vector} alt="flêche dirigée vers le bas" />
        </div>
        </p>
        ))}
        </div>
    )
};

export default Collapse;