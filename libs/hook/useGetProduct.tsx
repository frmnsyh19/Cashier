import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["productGet"],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/product");
        return res.data.datas;
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    },
    refetchOnWindowFocus: false,
  });
};
