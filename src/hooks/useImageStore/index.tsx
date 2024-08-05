import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "@/apis";

export interface useImageStoreProps {
  uploadedFile: File;
}

export const useImageStore = () => {
  const addImages = async ({ uploadedFile }: useImageStoreProps) => {
    const storageRef = ref(storage, `images/${uploadedFile.name}`);
    await uploadBytes(storageRef, uploadedFile);
    const fileUrl = await getDownloadURL(storageRef);
    return fileUrl;
  };
  return { addImages };
};
