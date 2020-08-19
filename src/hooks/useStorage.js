import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file.image) {
      console.log(file.image.name);
      const myImage = file.image;
      const myCaption = file.caption;
      // ref
      const storageRef = projectStorage.ref(myImage.name);
      const collectionRef = projectFirestore.collection("images");
      console.log(file);
      storageRef.put(myImage).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          const caption = myCaption;
          collectionRef.add({ url, createdAt, caption });
          setUrl(url);
        }
      );
    }
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
