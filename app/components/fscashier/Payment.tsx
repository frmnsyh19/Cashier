"use client";
import { FormatDecimal } from "@/libs/helper/FormatDecimal";
import { useAppSelector } from "@/libs/store";
import React, { useMemo } from "react";

export const Payment = () => {
  const { items: bag } = useAppSelector((state) => state.BagReducer);

  const totalPayment = useMemo(() => {
    return bag?.reduce((acc, item) => acc + item.total, 0) ?? 0;
  }, [bag]);

  return (
    <div className="w-full flex p-1 card flex-col gap-1">
      <div className="w-full p-1">
        <p className="text-lg font-bold">Total Payment</p>
      </div>
      <div className="w-full bg-white flex flex-col gap-1">
        <div className="w-full flex p-4 border-b-gray-300 border-b flex-col gap-4">
          {bag &&
            bag.map((items) => (
              <div
                key={items.id}
                className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-base font-bold">{items.nama}</p>
                  <p className="text-base text-gray-400">{items.qty}</p>
                </div>
                <p className="text-base font-bold">
                  {FormatDecimal(items.total)}
                </p>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-between items-center p-4">
          <p className="text-base font-bold">Total Pembayaran</p>
          <p className="text-base font-bold">{FormatDecimal(totalPayment)}</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-6">
        <button className="w-full h-12 btn rounded-3xl bg-orange-400 text-base text-white">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};
