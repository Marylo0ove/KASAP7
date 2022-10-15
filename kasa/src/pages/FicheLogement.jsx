import React from 'react';
import CollapseEquipements from '../components/CollapseEquipments';
import CollapseLogement from '../components/CollapseLogement';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Title from '../components/Title';
import { logementsList } from '../data.js';

const FicheLogement = () => {
    const slides = [
        {url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"},
    {url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"},
    {url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"},
    {url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"},
    {url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"},];
    return (
        <div>
        <Header />
        <Slideshow slides={slides} />
        <Title />
        <Tag/>
        <Host />
        <Rating/>
        <div className='description-logement'>
        <CollapseLogement />
        <CollapseEquipements />
        </div>
        <Footer />
        </div>
    );
};

export default FicheLogement;