"use client";

import { addQty, minusQty } from "@/libs/features/BagRedux";
import { FormatDecimal } from "@/libs/helper/FormatDecimal";
import { useAppSelector } from "@/libs/store";
import React from "react";
import { useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
export const ProductListOrder = () => {
  const { items: bag } = useAppSelector((state) => state.BagReducer);

  const dispacth = useDispatch();

  const handleAddQty = (id: number) => {
    dispacth(addQty(id));
  };

  const handleMinusQty = (id: number) => {
    dispacth(minusQty(id));
  };

  return (
    <div className=" w-full flex flex-col gap-4 bg-white p-2">
      {bag
        ? bag.map((item, i: number) => {
            return (
              <div
                key={i}
                className=" w-full  p-1 flex justify-between items-center">
                <div className=" flex flex-col gap-1">
                  <p className=" text-base font-bold">{item.nama}</p>
                  <p className=" text-gray-400 text-base">
                    {FormatDecimal(item.price)}
                  </p>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <img
                    src={item.image}
                    className=" w-20 object-cover  h-20"
                    alt=""
                  />
                  <div className=" flex gap-2 justify-start">
                    <button
                      onClick={() => handleMinusQty(item.id)}
                      className=" btn btn-circle btn-sm btn-outline btn-warning text-base">
                      <FiMinus />
                    </button>
                    <div className=" h-full flex justify-center items-center">
                      <p className=" text-lg">{item.qty}</p>
                    </div>
                    <button
                      onClick={() => handleAddQty(item.id)}
                      className=" btn btn-circle btn-sm btn-outline btn-warning text-base">
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};
