import { useAtom } from 'jotai';
import { useRef } from 'react';

export const useImageUpload = (atom, path) => {
  const [state, setState] = useAtom(atom);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setState((prev) => ({ ...prev, [path]: imageUrl }));
  };

  const handleDeleteImage = () => {
    URL.revokeObjectURL(state[path]);
    setState((prev) => ({ ...prev, [path]: null }));
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // const imageUrl = image instanceof Blob ? URL.createObjectURL(image) : null;

  return {
    inputRef,
    handleUploadImage,
    handleDeleteImage,
    handleUploadButtonClick,
    imageUrl: state[path],
  };
};
