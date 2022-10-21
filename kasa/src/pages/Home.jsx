import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner.jsx";
import Card from "../components/Card/Card";
import data from "../logements.json";
import { Link } from "react-router-dom";
import photo from "../assets/photo-banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        backgroundImage={photo}
        bannerText="Chez vous,"
        bannerText2=" partout et ailleurs"
      />
      <div className="list">
        {data.map((data) => (
          <Link
            key={data.id}
            className={"linkToCard"}
            to={`/FicheLogement/${data.id}`}
          >
            <Card cardTitle={data.title} cardImage={data.cover} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
