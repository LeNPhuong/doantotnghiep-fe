import React, { SetStateAction } from 'react';
import { IFMap } from '../../../types/User';
import { useUpdateAddressMutation } from '../../../service/profile';
import { LoadingModal } from '../../../components';

const EditMap: React.FC<{
  edit: IFMap;
  setEdit: React.Dispatch<SetStateAction<IFMap>>;
  setEditModal: React.Dispatch<SetStateAction<boolean>>;
}> = ({ edit, setEdit, setEditModal }) => {
  const [updateAddress, { isLoading }] = useUpdateAddressMutation();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSave() {
    const dataAddress = {
      id: edit.id,
      data: { address: edit.address, active: edit.active },
    };
    updateAddress(dataAddress)
      .unwrap()
      .then((data) => {
        alert(data.message);
        location.reload();
      });
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-xl w-[100%] max-w-md mx-auto space-y-6">
          <h2 className="text-lg font-semibold text-center">Sửa địa chỉ</h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-[#949191]">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={edit.address}
                onChange={handleInputChange}
                className="border-b-2 pb-2 outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setEditModal(false)}
              className="text-gray-500"
            >
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
      {isLoading && <LoadingModal />}
    </>
  );
};

export default EditMap;
