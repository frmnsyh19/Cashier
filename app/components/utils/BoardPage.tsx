"use client";

import moment from "moment-timezone";
import { usePathname } from "next/navigation";
import React from "react";

export const BoardPage = () => {
  const jakartaNow = moment().tz("Asia/Jakarta");

  const pathname = usePathname(); // contoh: "/fsadmin/dashboard"

  // Pisahkan path dengan "/"
  const segments = pathname.split("/"); // ["", "fsadmin", "dashboard"]

  // Ambil segment terakhir (halaman saat ini)
  const currentPage = segments[segments.length - 1]; // "dashboard"

  return (
    <div className=" w-full p-4 flex bg-white justify-between shadow items-center h-28">
      <div className=" flex flex-col gap-1">
        <p className=" text-2xl font-bold text-violet-800 capitalize">
          {currentPage}
        </p>
        <p className=" text-lg text-gray-400 font-semibold">
          {jakartaNow.format("dddd, MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};
