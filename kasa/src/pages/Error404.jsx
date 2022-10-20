import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Error from "../components/Error404/Error";
//import '../styles/error404.css'

const Error404 = () => {
  return (
    <div>
      <Header />
      <Error />
      <Footer />
    </div>
  );
};

export default Error404;
