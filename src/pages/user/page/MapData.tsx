import React, { useState } from 'react';
import ItemsMap from './ItemsMap';
import AddMap from './AddMap';
import { useGetAllMapQuery } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const MapData: React.FC<{}> = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const { data, isLoading, isFetching } = useGetAllMapQuery();

  if (isFetching) {
    return <LoadingModal />;
  }

  return (
    <div className="w-full max-w-[1003px]">
      <div className="flex md:flex-row flex-col justify-between items-center lg:mb-[32px] md:mb-[14px] md:gap-0 gap-[10px] md:py-0 py-[10px]">
        <p className="lg:text-[32px] md:text-[22px] font-[700] text-[#000]">
          Quản lý số địa chỉ
        </p>
        <button
          onClick={() => setAddModal(true)}
          className="bg-[#004D40] w-full lg:max-w-[203px] md:max-w-[170px] max-w-[150px] lg:text-[16px] md:text-[14px] text-[12px] font-semibold md:min-h-[46px] min-h-[36px] rounded-[50px] text-[#fff]"
        >
          Thêm địa chỉ
        </button>
      </div>
      <div className="flex flex-col gap-[10px] md:px-0 px-[20px]">
        {data?.data.length !== 0 &&
          data?.data.map((e) => <ItemsMap key={e.id} data={e} />)}
      </div>

      {/* Modal for adding or editing address */}
      {addModal && <AddMap setAddModal={setAddModal} />}
    </div>
  );
};

export default MapData;
