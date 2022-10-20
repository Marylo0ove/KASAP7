import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StarRating from "../../components/StarRating/StarRating.tsx";
import Collapse from "../../components/Collapse/Collapse.tsx";

import { useAppartment } from "./FicheLogement.hook.tsx";
import "../../logements.json";
import "../FicheLogement/FicheLogement.css";
import Slideshow from "../../components/Slideshow/Slideshow.tsx";

const FicheLogement = () => {
  const h = useAppartment();
  return (
    <div>
      <Header />
      <Slideshow pictures={h.appartment ? h.appartment.pictures : []} />
      <div>
        <div className="entete-flex">
          <div>
            <div className="title">
              <div>
                <h1 className="title">{h.appartment?.title}</h1>
                <p className="location">{h.appartment?.location}</p>
                <ul className="ul-margin tags">
                  {h.appartment?.tags &&
                    h.appartment?.tags.map((tag: string) => (
                      <li key={tag} className="tag">
                        {tag}{" "}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="host-rate-flex">
            <div className="host">
              <p className="host-name"> {h.appartment?.host.name}</p>
              <img
                className="host-picture"
                src={h.appartment?.host.picture}
                alt="photo de profil de l'hôte"
              />
            </div>
            <div>
              <StarRating
                score={h.appartment ? parseInt(h.appartment.rating) : 0}
              />
            </div>
          </div>
        </div>
        <div className="description-logement">
          <div className="collapse-logement">
            <Collapse title="Description" content={h.appartment?.description} />
          </div>
          <div className="collapse-logement">
            <Collapse title="Équipements" contents={h.appartment?.equipments} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FicheLogement;
