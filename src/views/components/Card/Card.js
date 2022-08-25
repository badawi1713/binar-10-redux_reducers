import React from "react";
import { useSelector } from "react-redux";
import CardImage from "./CardImage";
import CardName from "./CardName";

const Card = () => {
  const authReducer = useSelector((state) => state.authReducer);
  const { isLogin } = authReducer;
  return (
    <div className="flex flex-col items-center w-80 h-56 rounded-md bg-slate-900 p-6">
      {isLogin ? (
        <>
          <CardImage />
          <CardName />
        </>
      ) : (
        <p className="text-center text-3xl text-white my-auto">Anda Belum Login</p>
      )}
    </div>
  );
};

export default Card;
