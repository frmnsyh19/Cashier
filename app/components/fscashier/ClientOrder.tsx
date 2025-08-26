"use client";

import React from "react";
import { ProductListOrder } from "./ProductListOrder";
import { Payment } from "./Payment";

export const ClientOrder = () => {
  return (
    <div className=" w-full flex flex-col gap-2 p-2">
      <ProductListOrder />
      <Payment />
    </div>
  );
};
