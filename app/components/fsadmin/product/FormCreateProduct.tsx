"use client";

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useQueryGetCategory } from "@/libs/hook/useQueryGetCategory";
import { useStoreProduct } from "@/libs/hook/useStoreProduct";
import { FormStoreProduct } from "@/libs/service/FormStoreProduct";
import { NumericFormat } from "react-number-format";
import { ButtonLoading } from "../../utils/ButtonLoading";

type categoryType = {
  id: number;
  nama: string;
};

export const FormCreateProduct = () => {
  const [preview, setPreview] = useState<string>("");

  const { data: category } = useQueryGetCategory();
  const { mutate, isPending: loading } = useStoreProduct();

  const formik = FormStoreProduct({ mutate });

  return (
    <form onSubmit={formik.handleSubmit} className=" w-full flex flex-col">
      <div className=" w-full flex flex-col h-full bg-white p-5 gap-4">
        <div className="w-full flex flex-col gap-1">
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category_id"
              value={formik.values.category_id}
              onChange={formik.handleChange}
              label="Category">
              {category?.map((item: categoryType) => (
                <MenuItem key={item.id} value={item.id} className="capitalize">
                  {item.nama}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {formik.errors.category_id && (
            <small className="text-red-500 text-sm">
              {formik.errors.category_id}
            </small>
          )}
        </div>
        <div className=" w-full flex flex-col gap-1">
          <TextField
            id=""
            label="Nama"
            name="nama"
            variant="outlined"
            value={formik.values.nama}
            onChange={formik.handleChange}
          />
          {formik.errors.nama && (
            <small className="text-red-500 text-sm">{formik.errors.nama}</small>
          )}
        </div>
        <div className=" w-full flexs flex-col">
          <NumericFormat
            value={formik.values.price}
            name="price"
            onChange={formik.handleChange}
            customInput={TextField}
            thousandSeparator
            valueIsNumericString
            fullWidth
            prefix="$"
            variant="outlined"
            label="Price"
          />
          {formik.errors.price && (
            <p className="text-red-500">{formik.errors.price}</p>
          )}
        </div>
        <div className=" w-full flex flex-col gap-1">
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2"
            />
          )}
          <input
            type="file"
            name="image"
            className="file-input w-full"
            accept="image/*"
            onChange={(e) => {
              const file = e.currentTarget.files?.[0] ?? null;
              formik.setFieldValue("image", file);

              // Optional: Preview
              if (file) {
                const imageURL = URL.createObjectURL(file);
                setPreview(imageURL);
              }
            }}
            id=""
          />
          {typeof formik.errors.image === "string" && (
            <p className="text-red-500 text-sm">{formik.errors.image}</p>
          )}
        </div>
        <div className=" w-full flex justify-end items-center">
          {loading ? (
            <ButtonLoading />
          ) : (
            <button className="btn bg-violet-900 text-white" type="submit">
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
