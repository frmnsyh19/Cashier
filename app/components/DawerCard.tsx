"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useDispatch } from "react-redux";
import { addItem } from "@/libs/features/BagRedux";
import { useAppSelector } from "@/libs/store";
import { FormatDecimal } from "@/libs/helper/FormatDecimal";

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

export const DawerCard = ({ product }: { product: Products }) => {
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
    <>
      <Drawer>
        <DrawerTrigger>
          <div
            className={`card bg-white h-[17rem] rounded-2xl flex justify-center p-2 items-center 
  w-full shadow-lg ${isOrder ? "border border-orange-500" : ""}`}>
            <div className=" w-[94%] bg-gray-200 rounded-3xl flex justify-center items-center">
              <img
                src={product?.image}
                className=" h-[10rem] w-full object-contain object-center lg:h-[10rem]  "
                alt=""
              />
            </div>
            <div className=" w-full p-2 flex flex-col justify-between gap-1">
              <div className=" w-full flex flex-col">
                <p className=" text-lg font-bold capitalize text-start text-wrap">
                  {product?.nama}
                </p>
                <p className=" text-lg font-bold text-start  text-orange-400">
                  ${FormatDecimal(product?.price ?? 0)}
                </p>
              </div>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerDescription>
              <div className=" w-full flex flex-col gap-3">
                <div className=" w-full justify-center items-center flex flex-col gap-3">
                  <img
                    src={product?.image}
                    className="  rounded-2xl object-cover object-center  h-48 w-[12rem]"
                    alt=""
                  />
                </div>
              </div>
            </DrawerDescription>
            <div className=" w-full flex flex-col gap-1">
              <p className=" text-lg text-center font-bold capitalize">
                {product?.nama}
              </p>
              <p className=" text-lg text-center text-orange-500 font-bold">
                ${FormatDecimal(product?.price ?? 0)}
              </p>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              onClick={() => handleAddToBag(product)}
              className=" bg-orange-500 hover:bg-orange-400">
              {isOrder ? "Tambah" : "Order Now"}
            </Button>
            <DrawerClose>
              <Button variant="outline" className=" w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
