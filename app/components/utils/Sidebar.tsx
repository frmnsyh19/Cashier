"use client";
import React, { useState } from "react";

export const Sidebar = () => {
  const [isActive, setIsActive] = useState<number>();

  const MenuList = [
    {
      id: 1,
      menu: "dashboard",
    },
    {
      id: 2,
      menu: "product",
    },
    {
      id: 3,
      menu: "Incoming Goods",
    },
    {
      id: 4,
      menu: "Order",
    },
    {
      id: 5,
      menu: "Stok",
    },
    {
      id: 6,
      menu: "Report",
    },
  ];

  return (
    <div className=" w-72 lg:flex hidden h-full flex-col bg-base-200 gap-2 p-2">
      <div className=" w-full p-3 flex justify-center items-center">
        <p className=" text-sky-600 font-semibold">frmnsyhStore</p>
      </div>
      <div className=" w-full flex flex-col ">
        <ul className="menu flex flex-col gap-4 bg-base-200 rounded-box w-full">
          {MenuList.map((item) => (
            <li
              key={item.id}
              onClick={() => setIsActive(item.id)}
              className={`${
                isActive === item.id ? "bg-red-600 text-white" : ""
              }`}>
              <a className="capitalize text-lg">{item.menu}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
