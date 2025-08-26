import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type bodyType = {
  nama: string;
  price: string;
  category_id: number;
  image: string;
};

export const useStoreProduct = () => {
  return useMutation({
    mutationKey: ["storeproduct"],
    mutationFn: async (body: bodyType) => {
      try {
        const store = await axios.post("/api/product", body);

        return store.data;
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
