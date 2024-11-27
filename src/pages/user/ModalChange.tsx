import React, { SetStateAction, useEffect, useState } from 'react';
import { useUpdateProfileMutation } from '../../service/profile';
import { LoadingModal } from '../../components';
import { IFProfile } from '../../types/User';
import { useAppDispatch } from '../../redux/store';
import { setProfile } from '../../redux/user/UserSlice';

const ModalChange: React.FC<{
  data: IFProfile;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setIsModalOpen, data }) => {
  const dispatch = useAppDispatch();
  const [update, { isLoading }] = useUpdateProfileMutation();

  const [userChange, setUserChange] = useState<{
    name: string;
    phone: string;
    email: string;
  }>({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (data) {
      setUserChange({
        name: data.data.name,
        phone: data.data.phone,
        email: data.data.email,
      });
    }
  }, [data]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setUserChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSave() {
    if (userChange !== null) {
      if (userChange.name.length === 0 || null) {
        return alert('Không thể để trống trường tên');
      }
      if (userChange.phone.length === 0 || null) {
        return alert('Không thể để trống trường số điện thoại');
      }
      if (userChange.email.length === 0 || null) {
        return alert('Không thể để trống trường email');
      }
      update(userChange)
        .unwrap()
        .then((data) => {
          dispatch(setProfile(data));
          alert(data.message);
          location.reload();
        })
        .catch(() => alert('Cập nhật thất bại'));
    }
  }

  return (
    <>
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
                value={userChange?.name}
                onChange={handleChange}
                className="font-semibold text-right outline-none"
              />
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <label className="text-[#949191]">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                value={userChange?.phone}
                onChange={handleChange}
                className="font-semibold text-right outline-none"
              />
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <label className="text-[#949191]">Email</label>
              <input
                type="text"
                name="email"
                value={userChange?.email}
                onChange={handleChange}
                className="font-semibold text-right outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end gap-[20px] mt-[30px]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white bg-red-500 px-[10px] rounded-[10px]"
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
        {isLoading && <LoadingModal />}
      </div>
    </>
  );
};

export default ModalChange;
