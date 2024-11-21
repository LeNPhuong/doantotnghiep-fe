import React, { useState } from 'react';
import LayoutAuth from '../../layout/LayoutAuth';
import { FormAuth, LoadingModal } from '../../components';
import { useChangePasswordMutation } from '../../service/profile';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

const ChangePassword: React.FC<{}> = () => {
  const token = JSON.parse(localStorage.getItem('token_access')!);
  const user = useAppSelector((e) => e.user.profile);
  const [change, { isLoading }] = useChangePasswordMutation();
  const [password, setPassword] = useState<string>('');
  const [c_password, setC_password] = useState<string>('');
  const navigate = useNavigate();

  if (!token && !user) {
    alert('Không đủ quyền hạn');
    return <Navigate to="/home" />;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password.length === 0 || c_password.length === 0) {
      return alert('Vui lòng nhập đầy đủ thông tin');
    }

    if (password !== c_password) {
      return alert('Mật khẩu không giống nhau');
    }

    change({ password: password, c_password: c_password })
      .unwrap()
      .then((data) => {
        alert(data.data);
        setPassword('');
        setC_password('');
        return navigate('/thong-tin-nguoi-dung');
      })
      .catch((data) => {
        if (data.data.message) {
          alert(data.data.message);
        }
      });
  }

  return (
    <LayoutAuth label="Đổi mật khẩu">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="md:max-w-[396px] max-w-[350px] w-full mx-auto"
      >
        <FormAuth
          type="password"
          init={password}
          setInit={setPassword}
          label="Mật khẩu mới"
        />
        <FormAuth
          type="password"
          init={c_password}
          setInit={setC_password}
          label="Nhập lại mật khẩu mới"
        />
        <div className="space-y-4 mx-2">
          <p className="md:text-[18px] text-[14px] text-[#1BA085]">
            * Mật khẩu phải trên 8 ký tự
          </p>
          <p className="md:text-[18px] text-[14px] text-[#1BA085]">
            * Mật khẩu phải phải có chữ và số
          </p>
        </div>
        <div className="flex w-full justify-center my-[30px]">
          <button
            type="submit"
            className="w-full md:max-w-[232px] max-w-[180px] max-h-[40px] md:min-h-[58px] md:max-h-[58px] bg-[#004D40] md:text-[24px] text-[12px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đổi mật khẩu
          </button>
        </div>
      </form>
      {isLoading && <LoadingModal />}
    </LayoutAuth>
  );
};

export default ChangePassword;
