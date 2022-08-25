import React from "react";
import { useSelector } from "react-redux";

const CardImage = () => {
  const { data } = useSelector((state) => state.cardReducer);

  return (
    <img
      className="rounded-full w-20 h-20 mb-8"
      alt="avatar"
      src={data?.avatar}
    />
  );
};

export default CardImage;
