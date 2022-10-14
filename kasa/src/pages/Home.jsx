import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/IMGbackground.png'
import Banner from '../components/Banner';
import Card from '../components/Card';


const Home = () => {
    return (
        <div>
        <Header />
        <Banner />
        <Card />
        <Footer />
        </div>
    );
};

export default Home;