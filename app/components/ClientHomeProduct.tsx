"use client";

import { useGetProduct } from "@/libs/hook/useGetProduct";
import React, { useEffect, useState } from "react";

import { CategoryProduct } from "./fscashier/CategoryProduct";
import { ProductCashier } from "./home/cashier/ProductCashier";
import { Invoice } from "./home/Invoice";

type Products = {
  id: number;
  nama: string;
  price: number;
  image: string;
};

type dataType = {
  id: number;
  product: Products[];
  nama: string;
};

export const ClientHomeProduct = () => {
  const [datas, setDatas] = useState<dataType[]>([]);
  const { data: product } = useGetProduct();

  useEffect(() => {
    if (!product) return;

    setDatas(product);
  }, [product]);

  console.log("datas", datas);

  return (
    <div className=" w-full flex h-full flex-row p-2 gap-5">
      <div className=" w-full lg:w-[70%] flex flex-col gap-4 lg:gap-7  lg:p-4">
        <CategoryProduct />
        <ProductCashier />
      </div>
      <Invoice />
    </div>
  );
};
