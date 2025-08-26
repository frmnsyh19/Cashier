"use client";

import { addItem } from "@/libs/features/BagRedux";
import { useGetProduct } from "@/libs/hook/useGetProduct";
import { useAppSelector } from "@/libs/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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

type BagType = {
  id: number;
  total: number;
  nama: string;
  qty: number;
  price: number;
  image: string;
};

export const ClientProduct = () => {
  const [originalDatas, setOriginalDatas] = useState<dataType[]>([]);
  const [datas, setDatas] = useState<dataType[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  // get data product by tanstack useQuery
  const { data } = useGetProduct();

  // get data in redux category slice
  const { category } = useAppSelector((state) => state.CategoryReducer);

  const dispatch = useDispatch();

  // First Render auto hit state
  useEffect(() => {
    if (data) {
      setOriginalDatas(data);
      setDatas(data);
    }
  }, [data]);

  useEffect(() => {
    if (category) {
      const filtered = originalDatas.filter((item) => item.id === category);

      setDatas(filtered);
      setNotFound(filtered.length === 0);
    } else {
      setDatas(originalDatas);
      setNotFound(false);
    }
  }, [category, originalDatas]);

  const handleItemsToBag = (items: Products) => {
    const newItem: BagType = {
      id: items.id,
      nama: items.nama,
      qty: 1,
      price: items.price,
      image: items.image,
      total: items.price,
    };

    dispatch(addItem(newItem));
  };

  return (
    <div className="w-full flex flex-row  flex-wrap gap-4 justify-center">
      {!notFound ? (
        <>
          {datas.map((items, i) => (
            <div
              key={i}
              className=" w-full bg-white flex flex-col flex-wrap lg:gap-4">
              <div className=" w-full p-3 gap-1">
                <p className=" text-lg font-bold capitalize">{items.nama}</p>
                <div className=" w-full border border-gray-200"></div>
              </div>
              <div className=" w-full flex flex-row gap-2 lg:gap-3 justify-start items-center flex-wrap">
                {items.product.map((product, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => handleItemsToBag(product)}
                      className=" w-[48%] shadow-2xl border border-gray-100 h-fit p-2 lg:w-64 rounded-2xl flex flex-col">
                      <img
                        src={product.image}
                        className=" w-full object-cover object-center rounded-2xl h-44"
                        alt=""
                      />
                      <div className=" w-full flex flex-col gap-2 p-2">
                        <p className=" text-base font-bold capitalize">
                          {product.nama}
                        </p>
                        <p className=" text-base text-gray-400 capitalize">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="w-full flex justify-center items-center">
          <p className="text-2xl text-gray-400">Product Not Found</p>
        </div>
      )}
    </div>
  );
};
