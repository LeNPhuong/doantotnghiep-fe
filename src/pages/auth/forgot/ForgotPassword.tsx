import React, { useState } from 'react';
import LayoutAuth from '../../../layout/LayoutAuth';
import { FormAuth } from '../../../components';

const ForgotPassword: React.FC<{}> = () => {
  const [email, setEmail] = useState('');
  return (
    <LayoutAuth label="Quên mật khẩu">
      <form className="max-w-[396px] w-full mx-auto">
        <FormAuth h="58px" label="Nhập email" init={email} setInit={setEmail} />
        <div className="mt-[16px]"></div>

        <div className="flex w-full justify-center my-[28px]">
          <button
            type="submit"
            className="w-full max-w-[232px] min-h-[58px] max-h-[58px] bg-[#004D40] text-[24px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Nhận mã
          </button>
        </div>
      </form>
      <p className="text-[18px] text-center">
        Vui lòng nhập email để nhận mã xác nhận
      </p>
    </LayoutAuth>
  );
};

export default ForgotPassword;
