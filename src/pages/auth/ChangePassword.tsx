import React, { useState } from 'react';
import LayoutAuth from '../../layout/LayoutAuth';
import { FormAuth } from '../../components';

const ChangePassword: React.FC<{}> = () => {
  const [old, setOld] = useState<string>('');
  const [news, setNews] = useState<string>('');
  const [again, setAgain] = useState<string>('');

  return (
    <LayoutAuth label="Đổi mật khẩu">
      <form className="md:max-w-[396px] max-w-[350px] w-full mx-auto">
        <FormAuth init={old} setInit={setOld} h="58px" label="Mật khẩu cũ" />
        <FormAuth init={news} setInit={setNews} h="58px" label="Mật khẩu mới" />
        <FormAuth
          init={again}
          setInit={setAgain}
          h="58px"
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
    </LayoutAuth>
  );
};

export default ChangePassword;
