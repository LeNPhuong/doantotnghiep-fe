import React, { useState } from 'react';
import FormAuth from '../../components/other/FormAuth';
import LayoutAuth from '../../layout/LayoutAuth';
const Dmk1 = () => {
  const [password, setPassword] = useState<string>('');

  return (
    <LayoutAuth label="Đổi mật khẩu">
      <form className="max-w-[396px] w-full mx-auto">
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Mật khẩu cũ"
        />
        <div className="mt-[16px]"></div>
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Mật khẩu mới"
        />
        <div className="mt-[16px]"></div>
        <FormAuth
          init={password}
          setInit={setPassword}
          h="58px"
          label="Nhập lại mật khẩu mới"
        />
        <div className="mt-[16px]"></div>
        <div className='space-y-4 mx-2'>
          <p className="text-[18px] text-[#1BA085]">
            * Mật khẩu phải trên 8 ký tự
          </p>
          <p className="text-[18px] text-[#1BA085]">
            * Mật khẩu phải phải có chữ và số
          </p>
        </div>
        <div className="flex w-full justify-center my-[30px]">
          <button
            type="submit"
            className="w-full max-w-[232px] min-h-[58px] max-h-[58px] bg-[#004D40] text-[24px] text-[#DDF16E] font-semibold rounded-[5px]"
          >
            Đổi mật khẩu
          </button>
        </div>
      </form>
    </LayoutAuth>
  );
};

export default Dmk1;
