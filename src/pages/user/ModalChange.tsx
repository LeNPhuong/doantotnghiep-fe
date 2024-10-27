import React from 'react';

interface data {
  name: string;
  phone: string;
  gender: string;
  dob: string;
}

const ModalChange: React.FC<{
  statusModal: React.Dispatch<React.SetStateAction<boolean>>;
  formData: data;
  setFormData: React.Dispatch<React.SetStateAction<data>>;
}> = ({ statusModal, formData, setFormData }) => {
  return (
    <div className="fixed flex items-center justify-center bg-black bg-opacity-50 h-screen left-0 right-0 bottom-0 top-0">
      <div className="bg-white p-8 rounded-xl w-[100%] max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-center mb-[20px]">
          Chỉnh sửa thông tin
        </h2>
        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((cr) => {
                  return { ...cr, name: e.target.value };
                })
              }
              className="font-semibold text-right outline-none"
            />
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData((cr) => {
                  return { ...cr, phone: e.target.value };
                })
              }
              className="font-semibold text-right outline-none"
            />
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Giới tính</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData((cr) => {
                  return { ...cr, gender: e.target.value };
                })
              }
              className="font-semibold text-right outline-none"
            />
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <label className="text-[#949191]">Ngày sinh</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={(e) =>
                setFormData((cr) => {
                  return { ...cr, dob: e.target.value };
                })
              }
              className="font-semibold text-right outline-none"
            />
          </div>
        </div>
        <div className="flex justify-end gap-[20px] mt-[30px]">
          <button
            onClick={() => statusModal(false)}
            className="text-white bg-red-500 px-[10px] rounded-[10px]"
          >
            Hủy
          </button>
          <button
            onClick={() => {
              statusModal(false);
              console.log('Form data saved:', formData); // Optional: Display saved data
            }}
            className="bg-[#004D40] text-white px-4 py-2 rounded-lg"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalChange;
