import React, { SetStateAction } from 'react';

const Image: React.FC<{
  setImage: React.Dispatch<SetStateAction<File | null>>;
}> = ({ setImage }) => {
  return (
    <div className="flex flex-row items-start w-[50%]">
      <div className="flex flex-col">
        <label htmlFor="">Hình ảnh</label>
        <input
          type="file"
          name="imgprd"
          onChange={(e) => setImage(e.target.files![0])}
        />
      </div>
    </div>
  );
};

export default Image;
