import React, { useEffect, useState } from 'react';
import {
  useAdminGetUserByIdQuery,
  useAdminUserUpdateByIdMutation,
} from '../../../../../service/apiAdmin';
import { useParams } from 'react-router-dom';
import { Loading, LoadingModal } from '../../../../../components';
import FIeldForm from '../../FIeldForm';
import { IFDataUserChange } from '../../../../../types/User';
import { useAppSelector } from '../../../../../redux/store';

const AccountDetails: React.FC<{}> = () => {
  const [update, { isLoading }] = useAdminUserUpdateByIdMutation();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [role, setRole] = useState<string>();
  const [active, setActive] = useState<number>();

  const user = useAppSelector((e) => e.user.profile?.data);

  const { id } = useParams();
  const { data, isFetching, isSuccess } = useAdminGetUserByIdQuery(Number(id));

  useEffect(() => {
    if (isSuccess) {
      setName(data.data.name);
      setEmail(data.data.email);
      setPhone(data.data.phone);
      setRole(data.data.role);
      setActive(data.data.active ? 1 : 0);
    }
  }, [id, data?.data, isSuccess]);

  if (isFetching) return <Loading />;

  function handleChange() {
    const dataCore: IFDataUserChange = {
      name,
      email,
      phone,
      role,
      active: active === 1 ? true : false,
    };

    const dataMain: IFDataUserChange = {};

    if (dataCore.name !== data?.data.name) {
      dataMain.name = dataCore.name;
    }

    if (dataCore.email !== data?.data.email) {
      dataMain.email = dataCore.email;
    }

    if (dataCore.phone !== data?.data.phone) {
      dataMain.phone = dataCore.phone;
    }

    if (dataCore.role !== data?.data.role) {
      dataMain.role = dataCore.role;
    }

    if (dataCore.active !== data?.data.active ? 1 : 0) {
      dataMain.active = dataCore.active;
    }

    if (Object.keys(dataMain).length === 0)
      return alert('không có gì để cập nhật');

    if (user?.id === data?.data.id && dataMain.role !== data?.data.role) {
      setRole('admin');
      return alert('Bạn không thể tự thay đổi quyền của chính mình');
    }

    update({ id: Number(id), data: dataMain })
      .unwrap()
      .then(() => {
        alert('Cập nhật thành công');
        location.reload();
      });
  }

  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <div className="w-full max-w-[48%] flex flex-col">
          <FIeldForm type="text" init={name!} setInit={setName!} label="Tên" />
          <FIeldForm
            type="email"
            init={email!}
            setInit={setEmail!}
            label="Email"
          />
          <FIeldForm
            type="text"
            init={phone!}
            setInit={setPhone!}
            label="Số điện thoại"
          />
        </div>
        <div className="w-full max-w-[48%] flex flex-col">
          <div className="flex flex-col w-full mb-[10px]">
            <label htmlFor="" className="mb-[3px] text-[18px] font-medium">
              Vai trò
            </label>
            <select
              className="outline-none border-[#014C3E] border-[2px] text-[18px] px-[10px] py-[5px] rounded-[5px]"
              name=""
              id=""
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">Người dùng</option>
              <option value="admin">Quản trị viên</option>
            </select>
          </div>
          <div className="flex flex-col w-full mb-[10px]">
            <label htmlFor="" className="mb-[3px] text-[18px] font-medium">
              Trạng thái
            </label>
            <select
              className="outline-none border-[#014C3E] border-[2px] text-[18px] px-[10px] py-[5px] rounded-[5px]"
              name=""
              id=""
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
            >
              <option value={1}>Hoạt động</option>
              <option value={0}>Vô hiệu</option>
            </select>
          </div>
        </div>
      </div>
      <button
        onClick={handleChange}
        className="bg-[#014C3E] text-[#00E875] text-[20px] font-medium px-[25px] py-[8px] rounded"
      >
        Cập nhật
      </button>
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default AccountDetails;
