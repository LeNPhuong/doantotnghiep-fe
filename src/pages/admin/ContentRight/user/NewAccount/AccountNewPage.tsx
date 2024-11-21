import React, { useState } from 'react';
import FIeldForm from '../../FIeldForm';
import { useAdminUserCreateMutation } from '../../../../../service/apiAdmin';
import { LoadingModal } from '../../../../../components';
import { IFDataUserChange, IFDataUserNew } from '../../../../../types/User';

const AccountNewPage: React.FC<{}> = () => {
  const [create, { isLoading }] = useAdminUserCreateMutation();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [role, setRole] = useState<string>();

  function handleCreate() {
    const dataInit: IFDataUserNew = {
      name,
      email,
      phone,
      password,
      role,
    };

    let checkData: boolean = false;
    let stringErr: string = '';

    Object.keys(dataInit).map((el) => {
      if (!dataInit[el as keyof IFDataUserNew]) {
        checkData = true;
        stringErr += `${el},` + ' ';
      }
    });

    if (checkData) {
      return alert('Không được bỏ trống các trường ' + stringErr);
    }

    create(dataInit)
      .unwrap()
      .then((data) => {
        alert(data.message);
        location.reload();
      })
      .catch(() => {
        return alert('Vui lòng kiểm tra lại thông tin');
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
          <FIeldForm
            type="password"
            init={password!}
            setInit={setPassword!}
            label="Mật khẩu"
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
        </div>
      </div>
      <button
        onClick={handleCreate}
        className="bg-[#014C3E] text-[#00E875] text-[20px] font-medium px-[25px] py-[8px] rounded"
      >
        Thêm tài khoản
      </button>
      {isLoading && <LoadingModal />}
    </div>
  );
};

export default AccountNewPage;
