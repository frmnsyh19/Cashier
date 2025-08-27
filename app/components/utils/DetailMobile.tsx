"use client";

import { FormatDecimal } from "@/libs/helper/FormatDecimal";
import { useAppSelector } from "@/libs/store";
import { IoBagAdd } from "react-icons/io5";
import React, { useMemo } from "react";
import Link from "next/link";

export const DetailMobile = () => {
  // ✅ Perbaikan: dipanggil di dalam komponen
  const { items: bag } = useAppSelector((state) => state.BagReducer);

  const totalBag = useMemo(() => {
    return bag.reduce((total, item) => total + item.total, 0);
  }, [bag]);

  // const handleAddSession = (items: BagType[]) => {
  //   sessionStorage.setItem("bag", JSON.stringify(items));
  //   router.push("/order");
  // };

  if (bag.length === 0) return null; // ✅ Lebih bersih daripada ternary kosong

  return (
    <Link
      href={"/order"}
      className="w-full fixed bottom-0 lg:hidden flex justify-center items-center p-3 z-50">
      <div className="w-full flex justify-between p-3 bg-rose-500 rounded-4xl items-center">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-xl text-white">{bag.length} items</p>
          <p className="text-wrap text-white text-sm">
            {bag.map((item) => item.nama).join(", ")}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-2xl font-semibold text-white">
            {FormatDecimal(totalBag)}
          </p>
          <IoBagAdd className="text-white text-3xl" />
        </div>
      </div>
    </Link>
  );
};
