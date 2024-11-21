import React, { useState } from 'react';
import EditMap from './EditMap';
import { IFMap } from '../../../types/User';
import { useUpdateAddressMutation } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const ItemsMap: React.FC<{
  data: IFMap;
}> = ({ data }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<IFMap>(data);
  const [updateAddress, { isLoading }] = useUpdateAddressMutation();

  function handleActive() {
    const status = confirm('Bạn có muốn đặt địa chỉ này là địa chỉ mạc định');
    if (status) {
      const dataAddress = {
        id: edit.id,
        data: { address: edit.address, active: data.active },
      };
      updateAddress(dataAddress)
        .unwrap()
        .then((data) => {
          alert(data.message);
          location.reload();
        });
    }
  }

  return (
    <>
      <div className="w-full rounded-[10px] px-[29px] py-[19px] shadow-[0_0_3px_rgba(0,0,0,0.25)] flex flex-row justify-between items-center">
        <div className="flex flex-col md:gap-[18px] gap-[5px]">
          <div className="flex flex-row gap-[5px] items-center lg:text-[18px] md:text-[14px] text-[14px] font-semibold">
            <p className="">{data.address}</p>
          </div>
          <p className="text-[rgba(0,0,0,0.6)] lg:text-[18px] md:text-[14px] text-[14px] font-semibold">
            {data.address}
          </p>
          {data.active ? (
            <button className="w-full min-w-[120px] max-w-[120px] lg:min-h-[38px] md:min-h-[30px] min-h-[25px] bg-[#EDF1F3] text-[#05E077] flex justify-center items-center lg:text-[16px] md:text-[12px] text-[14px] font-semibold rounded-[100px]">
              Mặc định
            </button>
          ) : (
            <button
              onClick={handleActive}
              className="w-full min-w-[180px] max-w-[180px] lg:min-h-[38px] md:min-h-[30px] min-h-[25px] bg-[#05E077] text-[#EDF1F3] flex justify-center items-center lg:text-[16px] md:text-[12px] text-[14px] font-semibold rounded-[100px]"
            >
              Đặt làm mặc định
            </button>
          )}
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
      {isLoading && <LoadingModal />}
    </>
  );
};

export default ItemsMap;
