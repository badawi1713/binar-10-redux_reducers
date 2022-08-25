import React from "react";
import { useSelector } from "react-redux";

const CardName = () => {
  const { data } = useSelector((state) => state.cardReducer);

  return <p className="text-white text-3xl">{data?.name}</p>;
};

export default CardName;
