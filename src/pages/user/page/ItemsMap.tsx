import React, { useState } from 'react';
import EditMap from './EditMap';

const ItemsMap: React.FC<{}> = () => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<{
    name: string;
    phone: string;
    address: string;
  }>({
    name: 'Tô Ký Trung Mỹ Tây Q12 TPHCM',
    phone: '099999999',
    address: 'Tô Ký Trung Mỹ Tây Q12 TPHCM',
  });
  return (
    <>
      <div className="w-full rounded-[10px] px-[29px] py-[19px] shadow-[0_0_3px_rgba(0,0,0,0.25)] flex flex-row justify-between items-center">
        <div className="flex flex-col md:gap-[18px] gap-[5px]">
          <div className="flex flex-row gap-[5px] items-center lg:text-[18px] md:text-[14px] text-[14px] font-semibold">
            <p className="">Tô Ký Trung Mỹ Tây Q12 TPHCM</p>
            <p className="text-[rgba(0,0,0,0.6)]">|</p>
            <p className="text-[rgba(0,0,0,0.6)]">099999999</p>
          </div>
          <p className="text-[rgba(0,0,0,0.6)] lg:text-[18px] md:text-[14px] text-[14px] font-semibold">
            Tô Ký Trung Mỹ Tây Q12 TPHCM
          </p>

          <div className="w-full min-w-[120px] max-w-[120px] lg:min-h-[38px] md:min-h-[30px] min-h-[25px] bg-[#EDF1F3] text-[#05E077] flex justify-center items-center lg:text-[16px] md:text-[12px] text-[14px] font-semibold rounded-[100px]">
            Mặc định
          </div>
        </div>
        <button
          className="text-[#05E077] lg:text-[18px] md:text-[14px] text-[16px] font-semibold"
          onClick={() => setEditModal(true)}
        >
          Sửa
        </button>
      </div>
      {editModal && (
        <EditMap edit={edit} setEdit={setEdit} setEditModal={setEditModal} />
      )}
    </>
  );
};

export default ItemsMap;
