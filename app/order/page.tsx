import { ClientOrder } from "@/app/components/fscashier/ClientOrder";
import React from "react";
import { BoardPage } from "../components/utils/BoardPage";

const page = () => {
  return (
    <div className=" w-full flex flex-col gap-2 bg-slate-200">
      <BoardPage />
      <ClientOrder />
    </div>
  );
};

export default page;
