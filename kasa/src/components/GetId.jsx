import React from "react";
import { useParams } from "react-router-dom";

const GetId = () => {
  const params = useParams();
  return <div>{JSON.stringify(params)}</div>;
};

export default GetId;
