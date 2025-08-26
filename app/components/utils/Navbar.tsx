"use client";

import React from "react";
import { Drawer } from "./Drawer";

export const Navbar = () => {
  return (
    <div className=" w-full flex p-2 flex-col bg-white gap-1 border border-gray-200 shadow-2xl">
      <div className=" navbar w-full">
        <div className=" navbar-start">
          <div className=" flex flex-row gap-1 items-center justify-center">
            <Drawer />
            <p className=" text-2xl font-bold">
              <span className=" text-gray-500">Louris</span>Resto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
