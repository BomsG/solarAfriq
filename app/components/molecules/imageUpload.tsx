import React, { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Reusable Image Upload Component with Modal
const ImageUploadModal = ({
  cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string,
  presetKey = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_KEY as string,
  folder = 'profiles',
  onUploadComplete,
  showModal,
  setShowModal,
}: //   handleSubmit,
{
  cloudName?: string;
  presetKey?: string;
  folder?: string;
  onUploadComplete?: (url: string) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  //   handleSubmit: any;
}) => {
  const [image, setImage] = useState<string | undefined>();
  const [progress, setProgress] = useState<number>(0);
  //   const [showModal, setShowModal] = useState<boolean>(false);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', presetKey);
    fd.append('folder', folder);

    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (event) => {
          setProgress(Math.round((100 * event.loaded) / Number(event.total)));
        },
      })
      .then((res) => {
        const imageUrl = res?.data?.url;
        setImage(imageUrl);
        if (onUploadComplete) {
          onUploadComplete(imageUrl);
        }
      })
      .catch((err) => console.error(err));
  };

  //   const handleOpenModal = () => setShowModal(true);
  //   const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleOpenModal}>
        Upload Image
      </button> */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className='sm:max-w-[425px] overflow-y-scroll max-h-[70vh]'>
          <DialogHeader>
            <DialogTitle>Upload portal</DialogTitle>
            <DialogDescription className='hidden'></DialogDescription>
          </DialogHeader>

          {image && (
            <div className='mb-4 mt-8 mx-auto'>
              <img
                src={image}
                alt='Uploaded'
                className='w-[150px] h-[150px] object-cover rounded-lg'
              />
            </div>
          )}

          <div className='flex items-center space-x-6 mt-4'>
            <label className='block'>
              <span className='sr-only'>Choose profile photo</span>
              <input
                type='file'
                onChange={handleFile}
                className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
              />
            </label>
          </div>

          {progress > 0 && (
            <div className='w-full bg-gray-200 rounded-full'>
              <div
                className='bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
          )}

          <div className='mt-4 flex justify-end'>
            {/* <button
              className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2'
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button> */}
            <button
              className='bg-[#A91290] hover:bg-[#5D094F] text-white px-4 py-2 rounded-md'
              //   onClick={handleSubmit(onUploadComplete)}
              onClick={() => setShowModal(false)}
            >
              Done
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageUploadModal;
