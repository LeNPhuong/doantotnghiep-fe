import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ItemsMap from './Itemsmap';
import AddMap from './AddMap';

const MapData: React.FC<{}> = () => {
  const [addModal, setAddModal] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[1003px]">
      <div className="flex justify-between items-center mb-[32px]">
        <Typography
          variant="body1"
          sx={{ fontSize: '32px' }}
          fontWeight={700}
          color="#000"
        >
          Quản lý số địa chỉ
        </Typography>
        <button
          onClick={() => setAddModal(true)}
          className="bg-[#004D40] w-full max-w-[203px] text-[16px] font-semibold min-h-[46px] max-h-[46px] rounded-[50px] text-[#fff]"
        >
          Thêm địa chỉ
        </button>
      </div>
      <div className="flex flex-col gap-[20px]">
        <ItemsMap />
        <ItemsMap />
        <ItemsMap />

      </div>

      {/* Modal for adding or editing address */}
      {addModal && <AddMap setAddModal={setAddModal} />}
    </div>
  );
};

export default MapData;
