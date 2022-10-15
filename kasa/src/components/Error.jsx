import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error404.css'

const Error = () => {
    return (
        <div className='error404'>
            <p className='error404-chiffre'>404</p>
            <p className='error404-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error404-redirection' to="/Home">Retourner sur la page d'Accueil</Link>
        </div>
    );
};

export default Error;