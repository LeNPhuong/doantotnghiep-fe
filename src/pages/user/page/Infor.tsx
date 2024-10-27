import React, { useState } from 'react';
import ModalChange from '../ModalChange';
import TitleUser from '../TitleUser';
import { Typography } from '@mui/material';

const Infor: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    gender: string;
    dob: string;
  }>({
    name: 'Anh Long',
    phone: '0961921909',
    gender: 'Nam',
    dob: '2001-07-25',
  });

  function statusModal(status: boolean): boolean {
    setIsModalOpen((e) => (e = status));
    return true;
  }

  return (
    <div className="w-full max-w-[1003px] shadow-[0_0_3px_rgba(0,0,0,0.25)] rounded-[10px]">
      <div className="flex justify-between items-center h-[54px] px-[24px] border-b-[1px] border-b-[rgba(0,0,0,0.1)] mb-[16px]">
        <TitleUser title="Thông tin cá nhân" />
        <Typography
          variant="body1"
          sx={{ fontSize: '18px' }}
          fontWeight={500}
          color="#000"
        >
          Thông tin cá nhân
        </Typography>
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
        <div className="w-[40%] mx-auto flex flex-col gap-[28px]">
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Họ và tên</p>
            <p className="font-semibold">{formData.name}</p>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Số điện thoại</p>
            <p className="font-semibold">{formData.phone}</p>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Giới tính</p>
            <p className="font-semibold">{formData.gender}</p>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="text-[#949191]">Ngày sinh</p>
            <p className="font-semibold text-[#004D40] cursor-pointer">
              {formData.dob}
            </p>
          </div>

          <button
            onClick={() => statusModal(true)}
            className="flex justify-center items-center text-[16px] font-semibold mx-auto bg-[#004D40] text-white min-h-[46px] max-h-[46px] rounded-[50px] w-full max-w-[349px]"
          >
            Chỉnh sửa thông tin
          </button>

          {isModalOpen && (
            <ModalChange
              statusModal={statusModal}
              formData={formData}
              setFormData={setFormData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Infor;
