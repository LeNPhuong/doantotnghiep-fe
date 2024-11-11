import React, { useState } from 'react';
import LayoutAuth from '../../../layout/LayoutAuth';
import { FormAuth, LoadingModal } from '../../../components';
import { useGetOtpMutation } from '../../../service/user';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [forgot, { isLoading }] = useGetOtpMutation();

  function getOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.length === 0) {
      return alert('Vui lòng nhập email');
    } else {
      forgot({ email: email })
        .unwrap()
        .then((data) => {
          if (data.success) {
            alert('Vui lòng kiểm tra email, mã có hiệu lực trong 1 phút');
            localStorage.setItem('forgot_password', JSON.stringify({ email }));
            navigate('doi-mat-khau');
          }
        })
        .catch(() => {
          alert('Không tìm thấy email');
        });
    }
  }

  return (
    <LayoutAuth label="Quên mật khẩu">
      <form
        onSubmit={getOtp}
        className="md:max-w-[396px] max-w-[350px] w-full mx-auto"
      >
        <FormAuth
          type="email"
          label="Nhập email"
          init={email}
          setInit={setEmail}
        />

        <div className="flex w-full justify-center my-[28px]">
          <button
            type="submit"
            className="w-full md:max-w-[232px] max-w-[180px] max-h-[40px] md:min-h-[58px] md:max-h-[58px] bg-[#004D40] md:text-[24px] text-[12px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Nhận mã
          </button>
        </div>
      </form>
      <p className="md:text-[18px] text-[14px] text-center">
        Vui lòng nhập email để nhận mã xác nhận
      </p>
      {isLoading && <LoadingModal />}
    </LayoutAuth>
  );
};

export default ForgotPassword;
