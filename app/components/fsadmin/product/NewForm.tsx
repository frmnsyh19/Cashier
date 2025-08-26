//  <div className=" w-full flex p-2 flex-col gap-1">
//           <FormControl fullWidth>
//             <InputLabel id="demo-simple-select-label">Category</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               name="category_id"
//               value={formik.values.category_id}
//               onChange={formik.handleChange}
//               label="Category">
//               {category
//                 ? category.map((items: categoryType, i: number) => {
//                     return (
//                       <MenuItem className="capitalize" value={items.id} key={i}>
//                         {items.nama}
//                       </MenuItem>
//                     );
//                   })
//                 : ""}
//             </Select>
//           </FormControl>
//           {formik.errors.category_id && (
//             <p className="text-red-500">{formik.errors.category_id}</p>
//           )}
//         </div>
//         <div className=" w-full flex p-2 flex-col gap-1">
//           <TextField
//             variant="outlined"
//             value={formik.values.nama}
//             onChange={formik.handleChange}
//             label="Produk"
//           />
//           {formik.errors.nama && (
//             <p className="text-red-500">{formik.errors.nama}</p>
//           )}
//         </div>
//         <div className=" w-full flex p-2">
//           <NumericFormat
//             value={formik.values.price}
//             onChange={formik.handleChange}
//             customInput={TextField}
//             thousandSeparator
//             valueIsNumericString
//             prefix="$"
//             variant="standard"
//             label="react-number-format"
//           />
//           {formik.errors.price && (
//             <p className="text-red-500">{formik.errors.price}</p>
//           )}
//         </div>
// <div className=" w-full flex p-2 flex-col gap-1">
//   {preview && (
//     <img
//       src={preview}
//       alt="Preview"
//       className="w-32 h-32 object-cover mt-2"
//     />
//   )}
//   <input
//     type="file"
//     name=""
//     className="file-input w-full"
//     accept="image/*"
//     onChange={(e) => {
//       const file = e.currentTarget.files?.[0] ?? null;
//       formik.setFieldValue("image", file);

//       // Optional: Preview
//       if (file) {
//         const imageURL = URL.createObjectURL(file);
//         setPreview(imageURL);
//       }
//     }}
//     id=""
//   />
//   {formik.errors.image && (
//     <p className="text-red-500 text-sm">{formik.errors.image}</p>
//   )}
// </div>
