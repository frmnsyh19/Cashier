import { useFormik } from "formik";
import { z } from "zod";
import { UploadImage } from "../helper/UploadImage";
import { toast } from "react-toastify";

type bodyType = {
  nama: string;
  price: string;
  category_id: number;
  image: string;
};

// Schema untuk validasi Zod
const ProductValidation = z.object({
  nama: z.string().min(1, "Nama produk wajib diisi"),
  price: z.string().min(1, "Harga tidak boleh nol"),
  category_id: z
    .number({ invalid_type_error: "Kategori wajib dipilih" })
    .min(1, "Kategori wajib dipilih"),
  image: z
    .instanceof(File, { message: "Gambar harus berupa file" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Ukuran gambar maksimal 5MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Format gambar harus JPG atau PNG",
    }),
});

export const FormStoreProduct = ({
  mutate,
}: {
  mutate: (value: bodyType) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      nama: "",
      price: "",
      category_id: "",
      image: null as unknown as File, // Type coercion ke File
    },
    validate: (values) => {
      const result = ProductValidation.safeParse(values);
      if (result.success) return {};
      return result.error.flatten().fieldErrors;
    },
    onSubmit: async () => {
      const { nama, price, category_id, image } = formik.values;
      try {
        const urlImage = await UploadImage(image);
        mutate({
          nama,
          price,
          category_id: parseInt(category_id),
          image: urlImage,
        });
        toast.success("add product success");
        formik.resetForm();
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    },
  });

  return formik;
};
