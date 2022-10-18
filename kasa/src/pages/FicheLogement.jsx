import React from "react";
import CollapseEquipements from "../components/CollapseEquipments";
import CollapseLogement from "../components/CollapseLogement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Title from "../components/Title";
import GetId from "../components/GetId";
import Logement from "../components/Logement";
import { logementsList } from "../data.js";

const FicheLogement = () => {
  return (
    <div>
      <Header />
      <GetId />
      <Slideshow />
      <Title />
      <Tag />
      <Host />

      <div className="description-logement">
        <CollapseLogement />
        <CollapseEquipements />
      </div>
      <Footer />
    </div>
  );
};

export default FicheLogement;
