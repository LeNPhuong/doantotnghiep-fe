import React, { useState, ChangeEvent } from 'react';
import ModalChange from '../user/ModalChange';

type FormData = {
  name: string;
  phone: string;
  gender: string;
  dob: string;
};
const UserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: 'Anh Long',
    phone: '0961921909',
    gender: 'Nam',
    dob: 'Thêm thông tin',
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex gap-8 px-[100px] my-4">
      <div className="w-1/4 flex-col space-y-6">
        {/* Profile Details */}
      </div>
      
      <div className="w-3/4 space-y-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">Thông tin cá nhân</div>
        </div>

        <div className="w-[40%] mx-auto space-y-8">
          {/* Name */}
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="font-semibold"
            />
          </div>

          {/* Phone */}
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="font-semibold"
            />
          </div>

          {/* Gender */}
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Giới tính</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="font-semibold"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Ngày sinh</label>
            <input
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="font-semibold"
            />
          </div>

          <button
            onClick={openModal}
            className="flex justify-center mx-auto bg-[#004D40] text-white px-16 py-2 rounded-2xl"
          >
            Chỉnh sửa thông tin
          </button>

          {isModalOpen && <ModalChange />}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
