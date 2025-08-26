"use client";

import { addCategory } from "@/libs/features/CategoryReducer";
import { useQueryGetCategory } from "@/libs/hook/useQueryGetCategory";

import React, { useState } from "react";
import { SiBuymeacoffee } from "react-icons/si";
import { RiDrinks2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";

type itemsCategory = {
  categoryid: string;
  id: number;
  nama: string;
};

export const CategoryProduct = () => {
  const [isMenu, setIsMenu] = useState<number>();

  const { data: category } = useQueryGetCategory();

  const dispatch = useDispatch();

  const handleAddCategory = (id: number) => {
    setIsMenu(id);
    dispatch(addCategory({ category: id })); // langsung kirim id yang diklik
  };

  return (
    <div className=" w-full flex gap-1 lg:gap-3 lg:p-0 p-1">
      {category
        ? category.map((items: itemsCategory, i: number) => {
            return (
              <div
                onClick={() => handleAddCategory(items.id)}
                className={`${
                  items.id === isMenu
                    ? " w-32 lg:w-40 bg-white rounded-3xl p-1 lg:p-2 flex justify-start gap-2 items-center border border-orange-400"
                    : "w-32 lg:w-40 bg-white rounded-3xl p-1 lg:p-2 flex justify-start gap-2 items-center"
                }`}
                key={i}>
                <div className=" p-2 rounded-xl bg-gray-200  flex justify-center items-center">
                  {items.nama === "coffe" ? (
                    <SiBuymeacoffee className=" text-xl lg:text-2xl text-amber-950" />
                  ) : (
                    <RiDrinks2Fill className=" text-xl lg:text-2xl text-red-600" />
                  )}
                </div>
                <p className=" text-sm lg:text-base font-bold capitalize">
                  {items.nama}
                </p>
              </div>
            );
          })
        : ""}
    </div>
  );
};
