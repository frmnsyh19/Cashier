"use client";

import { clearBag, removeItem } from "@/libs/features/BagRedux";
import { FormatDecimal } from "@/libs/helper/FormatDecimal";
import { useAppSelector } from "@/libs/store";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";

type ItemType = {
  nama: string;
  id: number;
  qty: number;
  image: string;
  price: number;
  total: number;
};

export const Invoice = () => {
  const { items } = useAppSelector((state) => state.BagReducer);

  const dispatch = useDispatch();

  const handleRomoveItems = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleClearBag = () => {
    dispatch(clearBag());
  };

  return (
    <div className=" w-[30%] rounded-2xl h-full bg-white lg:flex hidden flex-col gap-2 p-3">
      <div className=" w-full flex justify-between items-start">
        <p className=" text-lg font-bold">Invoice</p>
        <p className="">{}</p>
      </div>
      <div className=" w-full flex flex-col gap-1">
        {items.length > 0 ? (
          items.map((item: ItemType, i) => {
            return (
              <div className=" w-full flex flex-col gap-1" key={i}>
                <div className=" w-full flex justify-end items-center">
                  <div
                    onClick={() => handleRomoveItems(item.id)}
                    className=" cursor-pointer text-gray-400 flex justify-center items-center">
                    <FaXmark />
                  </div>
                </div>
                <div className=" w-full flex justify-between items-center p-1">
                  <div className="flex flex-row justify-center items-center p-1 gap-2">
                    <img src={item.image} alt="" className=" w-12" />
                    <div className=" flex flex-col gap-1">
                      <p className=" text-base font-bold">{item.nama}</p>
                      <p className=" text-base text-orange-400">
                        ${FormatDecimal(item.price)}
                      </p>
                    </div>
                  </div>
                  <p className=" text-gray-500">{item.qty}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" w-full flex justify-center items-center">
            <p className=" text-lg capitalize text-gray-400">Item Not Found</p>
          </div>
        )}
      </div>
      <div className=" w-full p-2 flex flex-col gap-1">
        <button className=" btn w-full bg-orange-500  text-white text-base font-semibold">
          Checkout
        </button>
        <button className=" w-full btn bg-base-300 " onClick={handleClearBag}>
          Clear Bag
        </button>
      </div>
    </div>
  );
};
