import React, { SetStateAction, useState } from 'react';

const AddMap: React.FC<{
  setAddModal: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setAddModal }) => {
  const [newAddress, setNewAddress] = useState<{
    name: string;
    phone: string;
    address: string;
    default: boolean;
  }>({
    name: '',
    phone: '',
    address: '',
    default: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setNewAddress((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSave() {
    console.log(newAddress);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-xl w-[100%] max-w-md mx-auto space-y-6">
        <h2 className="text-lg font-semibold text-center">
          {/* {isEditing ? 'Sửa địa chỉ' : 'Thêm địa chỉ mới'} */}
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-[#949191]">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={newAddress.name}
              onChange={handleInputChange}
              className="border-b-2 pb-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#949191]">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={newAddress.phone}
              onChange={handleInputChange}
              className="border-b-2 pb-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#949191]">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={newAddress.address}
              onChange={handleInputChange}
              className="border-b-2 pb-2 outline-none"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="default"
              checked={newAddress.default}
              onChange={(e) =>
                setNewAddress((prev) => ({
                  ...prev,
                  default: e.target.checked,
                }))
              }
              className="mr-2"
            />
            <label className="text-[#949191]">Đặt làm địa chỉ mặc định</label>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={() => setAddModal(false)} className="text-gray-500">
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="bg-[#004D40] text-white px-4 py-2 rounded-lg"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMap;
