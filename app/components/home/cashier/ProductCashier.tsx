"use client";

import { useGetProduct } from "@/libs/hook/useGetProduct";
import { useAppSelector } from "@/libs/store";
import React, { useEffect, useState } from "react";
import { Card } from "../../utils/Card";
import { DawerCard } from "../../DawerCard";

type Products = {
  id: number;
  nama: string;
  price: number;
  image: string;
};

type dataType = {
  id: number;
  qty: number;
  product: Products[];
  nama: string;
};

export const ProductCashier = () => {
  const [datas, setDatas] = useState<dataType[]>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { category } = useAppSelector((state) => state.CategoryReducer);

  console.log(category, "cate");

  const { data: products } = useGetProduct();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768); // <768px = mobile
    };

    checkDevice(); // cek pertama kali
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!products) return;

    if (category) {
      const productFill = products.filter((items: dataType) => {
        return category == items.id;
      });

      const mapProducts = productFill.map((items: dataType) => {
        return {
          ...items,
          qty: 0,
        };
      });

      setDatas(mapProducts);
    } else {
      setDatas(products);
    }
  }, [products, category]);

  return (
    <>
      <div className=" w-full flex flex-row flex-wrap gap-3">
        {datas && datas.length > 0 ? (
          datas.map((items, i: number) => (
            <div
              key={i}
              className=" w-full bg-white flex flex-col flex-wrap lg:gap-4 p-1 lg:p-2">
              <div className=" w-full p-3 gap-1">
                <p className=" text-lg font-bold capitalize">{items.nama}</p>
                <div className=" w-full border border-gray-200"></div>
              </div>
              <div className=" w-full flex flex-row gap-2 lg:gap-3 justify-start items-center flex-wrap">
                {items.product && items.product.length > 0 ? (
                  items.product.map((prod, i) =>
                    isMobile ? (
                      <DawerCard key={i} product={prod} />
                    ) : (
                      <Card key={i} product={prod} />
                    )
                  )
                ) : (
                  <p key={items.id}>Tidak ada produk</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Data kosong</p>
        )}
      </div>
    </>
  );
};
