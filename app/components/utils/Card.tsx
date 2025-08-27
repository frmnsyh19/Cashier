"use client";
import { Button } from "@/components/ui/button";

import { addItem } from "@/libs/features/BagRedux";
import { FormatDecimal } from "@/libs/helper/FormatDecimal";
import { useAppSelector } from "@/libs/store";
import React from "react";
import { useDispatch } from "react-redux";

type Products = {
  id: number;
  nama: string;
  price: number;
  image: string;
};

type BagType = {
  id: number;
  total: number;
  nama: string;
  qty: number;
  price: number;
  image: string;
};

const CardComponent = ({ product }: { product: Products }) => {
  const dispacth = useDispatch();

  const { items } = useAppSelector((state) => state.BagReducer);

  const handleAddToBag = (items: Products) => {
    const itemsBag: BagType = {
      id: items.id,
      nama: items.nama,
      qty: 1,
      price: items.price,
      image: items.image,
      total: items.price,
    };

    dispacth(addItem(itemsBag));
  };

  const isOrder = items.some((item) => item.id === product.id);

  return (
    <div
      className={`card bg-white rounded-2xl flex justify-center p-2 items-center w-full shadow-lg ${
        isOrder ? "border border-orange-500" : ""
      }`}>
      <div className=" w-[94%] bg-gray-200 rounded-3xl flex justify-center items-center">
        <img
          src={product?.image}
          className=" h-[10rem] w-full object-contain object-center lg:h-[10rem]  "
          alt=""
        />
      </div>
      <div className=" w-full p-2 flex flex-col justify-between gap-1">
        <div className=" w-full flex flex-col">
          <p className=" text-lg font-bold text-wrap">{product?.nama}</p>
          <p className=" text-lg font-bold text-orange-400">
            ${FormatDecimal(product?.price ?? 0)}
          </p>
        </div>
        <div className="w-full lg:flex hidden justify-end items-center">
          <Button
            onClick={() => handleAddToBag(product)}
            className=" btn bg-orange-400 text-white rounded-2xl">
            Order Now
          </Button>
        </div>
        <div className=" w-full  flex lg:hidden justify-end items-center"></div>
      </div>
    </div>
  );
};

// dibungkus memo
export const Card = React.memo(CardComponent);
