"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQueryGetCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/category");
        return res.data.datas; // Penting: kembalikan data di sini
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw new Error(error.response?.data?.message || "Axios Error");
        } else {
          throw new Error("Unexpected Error");
        }
      }
    },
  });
};
