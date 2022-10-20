import { useEffect, useState } from "react";
import data from "../../logements.json";
import { useNavigate } from "react-router-dom";
import { Appartment } from "./FicheLogement.interface";
import { useParams } from "react-router-dom";

export const useAppartment = () => {
  const params = useParams();
  const id = params.id;
  // const id: string = window.location.href.split("/")[4];
  const [appartment, setAppartment] = useState<Appartment>();
  const [notValidID, setNotValidID] = useState<boolean>(false);
  const [pictures, setPictures] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAppart: Appartment | undefined = data.find(
      (appart: Appartment) => appart.id === id
    );

    if (fetchAppart) {
      setAppartment(fetchAppart);
      setNotValidID(false);
    } else {
      setNotValidID(true);
    }
  }, []);

  useEffect(() => {
    setPictures(appartment?.pictures ? appartment.pictures : []);
  }, [appartment]);

  useEffect(() => {
    if (notValidID) {
      navigate("not_found");
    }
  }, [notValidID]);

  return {
    appartment,
    pictures,
  };
};
