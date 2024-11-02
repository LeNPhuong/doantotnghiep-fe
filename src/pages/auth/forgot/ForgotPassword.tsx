import React, { useState } from 'react';
import LayoutAuth from '../../../layout/LayoutAuth';
import { FormAuth } from '../../../components';

const ForgotPassword: React.FC<{}> = () => {
  const [email, setEmail] = useState('');
  return (
    <LayoutAuth label="Quên mật khẩu">
      <form className="md:max-w-[396px] max-w-[350px] w-full mx-auto">
        <FormAuth h="58px" label="Nhập email" init={email} setInit={setEmail} />

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
    </LayoutAuth>
  );
};

export default ForgotPassword;
