"use client";

import { removeItem } from "@/libs/features/BagRedux";
import { useAppSelector } from "@/libs/store";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
type ItemType = {
  nama: string;
  id: number;
  qty: number;
  image: string;
  price: number;
};

export const ClientSummryBag = () => {
  const { items: bag } = useAppSelector((state) => state.BagReducer);

  const dispacth = useDispatch();

  const handleDeleteItems = (id: number) => {
    dispacth(removeItem(id));
  };
  return (
    <div className=" w-[27rem] h-[40rem] overflow-y-auto bg-white hidden lg:flex flex-col  gap-2 p-2">
      <div className=" w-full">
        <p className=" text-center text-lg font-semibold">FrmnsyhStore | Bag</p>
      </div>
      <div className="w-full flex justify-end items-center">
        <p className=" text-base">🧑‍💻Firmansyah</p>
      </div>
      <p className=" text-base font-bold">{`items(${bag.length})`}</p>
      <div className=" w-full flex flex-col gap-4">
        {bag
          ? bag.map((items: ItemType, i: number) => {
              return (
                <div
                  key={i}
                  className=" w-full border rounded-2xl border-gray-300 shadow-2xl p-1 flex flex-col ">
                  <div className="flex w-full justify-end">
                    <button
                      onClick={() => handleDeleteItems(items.id)}
                      className=" btn btn-circle btn-ghost">
                      <HiMiniXMark className=" " />
                    </button>
                  </div>
                  <div className=" flex flex-row gap-2 p-2 justify-start items-center">
                    <img src={items.image} className="w-20 h-20" alt="" />
                    <div className="flex flex-col">
                      <p className=" text-base font-bold">{items.nama}</p>
                      <p className=" text-base text-gray-400">{items.price}</p>
                      <p className=" text-base text-gray-400">
                        qty : {items.qty}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};
