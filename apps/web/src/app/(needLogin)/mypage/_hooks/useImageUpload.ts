import { useAtom } from 'jotai';
import { useRef } from 'react';

export const useImageUpload = (imageAtom) => {
  const [image, setImage] = useAtom(imageAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    setImage(file);
  };

  const handleDeleteImage = () => {
    if (image) {
      URL.revokeObjectURL(imageUrl);
      setImage(null);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  const handleUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const imageUrl = image instanceof Blob ? URL.createObjectURL(image) : null;

  return {
    inputRef,
    handleUploadImage,
    handleDeleteImage,
    handleUploadButtonClick,
    imageUrl,
  };
};
