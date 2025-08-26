import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/init";
import { v4 as uuidv4 } from "uuid";

export const UploadImage = async (files: File | null) => {
  const fileName = `${uuidv4()}-${files?.name.replace(/\s+/g, "")}`;
  const storageRef = ref(storage, `images/${fileName}`);

  await uploadBytes(storageRef, files as File);
  const downloadURL = await getDownloadURL(storageRef);

  return downloadURL; // URL publik gambar
};
