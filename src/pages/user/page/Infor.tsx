import React, { useState } from 'react';
import ModalChange from '../ModalChange';
import TitleUser from '../TitleUser';
import { useGetProfileV2Query } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const Infor: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isFetching } = useGetProfileV2Query();

  function statusModal(status: boolean): void {
    setIsModalOpen(status);
  }

  if (isFetching) return <LoadingModal />;

  return (
    <div className="w-full shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px] pb-[50px] md:px-0">
      <div className="flex justify-between items-center lg:h-[54px] h-[40px] px-[24px] border-b-[1px] border-b-[rgba(0,0,0,0.1)] mb-[16px]">
        <TitleUser title="Thông tin cá nhân" />
      </div>
      <div className="">
        <div className="w-[70px] h-[70px] rounded-[50%] bg-[#05E077] mx-auto mb-[19px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="85px"
            viewBox="0 0 448 512 "
            className="mx-auto"
          >
            <path
              fill="white"
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"
            />
          </svg>
        </div>
        <div className="lg:w-[40%] md:w-[60%] w-[60%] mx-auto flex flex-col gap-[28px] lg:text-[16px] md:text-[14px] text-[12px]">
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Họ và tên</p>
            <p className="font-semibold">{data?.data?.name}</p>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Số điện thoại</p>
            <p className="font-semibold">{data?.data?.phone}</p>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Email</p>
            <p className="font-semibold">{data?.data?.email}</p>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Địa chỉ mặc định</p>
            <p className="font-semibold text-[#004D40] cursor-pointer">
              {data?.data?.addresses?.find((e) => e.active === 1) &&
                data?.data?.addresses?.find((e) => e.active === 1)!.address}
            </p>
          </div>

          <button
            onClick={() => statusModal(true)}
            className="flex justify-center items-center lg:text-[16px] md:text-[12px] text-[12px] font-semibold mx-auto bg-[#004D40] text-white lg:min-h-[46px] md:min-h-[35px] min-h-[40px] rounded-[50px] w-full md:max-w-[349px] max-w-[250px]"
          >
            Chỉnh sửa thông tin
          </button>

          {isModalOpen && (
            <ModalChange data={data!} setIsModalOpen={setIsModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Infor;
