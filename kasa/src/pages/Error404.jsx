import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Error404 = () => {
    return (
        <div>
        <Header />
        <div className='error404'>
            <p className='error404-chiffre'>404</p>
            <p className='error404-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error404-redirection' to="/Home">Retourner sur la page d'Accueil</Link>
        </div>
        <Footer />
        </div>
    );
};

export default Error404;