import React from "react";
import { Sidebar } from "../components/utils/Sidebar";
import { BoardPage } from "../components/utils/BoardPage";
import { ToastContainer } from "react-toastify";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen bg-slate-200 overflow-hidden flex flex-row gap-2 p-1">
      <Sidebar />
      <div className="w-full h-full flex flex-col gap-2 overflow-y-auto">
        <BoardPage />
        <ToastContainer />
        <div className=" w-full h-full flex-col flex gap-1 p-1">{children}</div>
      </div>
    </div>
  );
}
